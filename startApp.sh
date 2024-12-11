docker build -t inno-news .

docker run -p 5173:5173 -v $(pwd):/usr/src/app -v /usr/src/app/node_modules inno-news