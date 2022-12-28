import os
import sys
from create_index import create_index
from search import search


def search_menu(index, content_to_title):
    while True:
        query = input("Search: ")
        results = search(index, query)

        # display query results
        print(f"Results for [{query}] :\n")

        if not len(results):
            print("Not found")

        for i in range(len(results)):
            title = content_to_title[results[i]]
            print(f"title: [{title}], file: [{results[i]}]\n")


def main():
    args = sys.argv[1:]

    num_args = len(args)

    directory = args[0]

    if not os.path.exists(directory):
        return 1

    files = []

    for filename in os.listdir(directory):
        if filename.endswith('.txt'):
            files.append(os.path.join(directory, filename))

    index = {}
    content_to_title = {}
    create_index(files, index, content_to_title)

    # Either allow the user to search using the index, or just print the index
    if num_args == 2 and args[1] == '-s':
        search_menu(index, content_to_title)
    else:
        print('index: ', index)
        print('\ntitles: ', content_to_title)


if __name__ == '__main__':
    main()
