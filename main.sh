#! /bin/bash

# variable examples
rawHTML="poemaday.html"
scrapedText="AsKar.txt"
url="https://poets.org/poem-a-day"

if [ "$1" = "a" ] 
then
    echo "route a"
    node main.js a
elif [ "$1" = "ct" ]
then
    echo "route b"
    node main.js b

elif [ "$1" = "i" ]
then
    # echo "route reconstruct" 
    mkdir data data/analyzed data/analyzed/words data/analyzed/sentences data/processed data/rawText
    touch test.js
else
    echo "Please indicate a valid route."
fi
