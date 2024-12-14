# Welcome to Izuchi's News Feed

## How to run project on MacOS and Linux

###### Step 1
  Clone repo 
  ```sh 
  git clone https://github.com/giprim/izuchi-news-feed.git
  ```

###### Step 2
  Create `.env` file in the root of the project directory and paste the provider environment variables

###### Step 3 
  From your terminal navigate to the project directory

###### Step 4
  Give execute permission to ./startApp.sh

  ```sh
  chmod +x startApp.sh
  ```

###### Step 5
  Execute startApp.sh by running `./startApp` in your terminal and wait for docker to do its thing.

  ```sh 
  ./startApp.sh
```

###### Step 6
  Open [http://localhost:5173](http://localhost:5173) in your browser

## How to run project on Windows

**PowerShell or Command Prompt:** You don’t need to make scripts executable; instead, execute them using:

```sh 
bash ./startApp.sh
```

 **Ensure you have Git Bash or Windows Subsystem for Linux installed to interpret the script.**

**Congratulations! 🎉 you can now explore the project.**
