import string
from nltk.stem import PorterStemmer

ps = PorterStemmer()


def get_file_content(filename):
    with open(filename, encoding='utf-8') as file:
        return file.read()


def map_term(term):
    return ps.stem(term.strip(string.punctuation).lower())
