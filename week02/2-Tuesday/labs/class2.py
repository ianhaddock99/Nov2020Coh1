# TO PULL BACK OUT SAVED DATA FROM A FILE
import pickle

with open('zodiac.pickle', 'rb') as fh:
    data = pickle.load(fh)
print(data)