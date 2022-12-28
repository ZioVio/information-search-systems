from utils import get_file_content, map_term


def create_index(filenames, index, file_titles):
    for filename in filenames:

        content = get_file_content(filename)
        file_titles[filename] = content.split('\n')[0]

        words = content.split()
        for word in words:
            mapped_term = map_term(word)
            if not (mapped_term in index):
                index[mapped_term] = []
            if filename not in index[mapped_term]:
                index[mapped_term].append(filename)

    return 0
