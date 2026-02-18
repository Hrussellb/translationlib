import re

INPUT_FILE = "new-dictonary.txt"


# ---------------- CLEANING ---------------- #

def clean_line(line):
    if "Dena’ina Dictionary" in line:
        return ""
    if "Dena’ina Word Index" in line:
        return ""
    if "English – Dena’ina Finderlist" in line:
        return ""
    if line.strip().startswith("Ø '"):
        return ""
    return line.strip()


# ---------------- LOAD DICTIONARY ---------------- #

def load_dictionary(filename):
    entry_pattern = re.compile(r"^([A-Za-z'²³⁴⁵+\-#]+)\s*\(([^)]+)\)")

    denaina_to_english = {}
    english_index = {}

    current_word = None
    current_definition = ""

    with open(filename, "r", encoding="utf-8") as f:
        for raw_line in f:
            line = clean_line(raw_line)

            if not line:
                continue

            match = entry_pattern.match(line)

            if match:
                # Save previous entry
                if current_word:
                    save_entry(current_word, current_definition,
                               denaina_to_english, english_index)

                current_word = match.group(1).strip()
                current_definition = line[match.end():].strip()

            else:
                if current_word:
                    current_definition += " " + line

    # Save last entry
    if current_word:
        save_entry(current_word, current_definition,
                   denaina_to_english, english_index)

    return denaina_to_english, english_index


def save_entry(word, definition, d2e, e_index):
    clean_def = re.sub(r"\s+", " ", definition).strip()
    clean_def = clean_def[:500]  # trim very long definitions

    word_lower = word.lower()
    d2e[word_lower] = clean_def

    # Build English index
    for token in clean_def.split():
        token = re.sub(r"[^A-Za-z]", "", token).lower()
        if len(token) > 3:  # ignore tiny words
            if token not in e_index:
                e_index[token] = []
            e_index[token].append(word_lower)


# ---------------- SEARCH FUNCTIONS ---------------- #

def search_denaina(d2e, query):
    query = query.lower()

    # Exact match first
    if query in d2e:
        return [("EXACT", query, d2e[query])]

    # Partial matches
    results = []
    for word, definition in d2e.items():
        if query in word:
            results.append(("PARTIAL", word, definition))

    return results


def search_english(e_index, d2e, query):
    query = query.lower()

    if query in e_index:
        words = list(set(e_index[query]))
        return [("MATCH", word, d2e[word]) for word in words]

    return []


# ---------------- MAIN PROGRAM ---------------- #

def main():
    print("Loading dictionary...")
    d2e, e_index = load_dictionary(INPUT_FILE)
    print("Dictionary loaded.")
    print("Total entries:", len(d2e))

    while True:
        print("\nSearch Mode:")
        print("1 - Dena’ina → English")
        print("2 - English → Dena’ina")
        print("Type 'exit' to quit")

        mode = input("Choose mode: ")

        if mode.lower() == "exit":
            break

        query = input("Enter search term: ")

        if mode == "1":
            results = search_denaina(d2e, query)

            if results:
                for rtype, word, definition in results[:10]:
                    if rtype == "EXACT":
                        print("\n=== EXACT MATCH ===")
                    print(f"\n{word}")
                    print(f"{definition}")
            else:
                print("No matches found.")

        elif mode == "2":
            results = search_english(e_index, d2e, query)

            if results:
                print("\n=== ENGLISH MATCHES ===")
                for _, word, definition in results[:10]:
                    print(f"\n{word}")
                    print(f"{definition}")
            else:
                print("No matches found.")

        else:
            print("Invalid option.")


if __name__ == "__main__":
    main()
