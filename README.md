# Personal Website

Welcome to my [personal website](https://henrywilson.surge.sh)! This is an [MIT licensed](https://github.com/henrywilson/personal-website/blob/main/LICENSE) React application hosted via static builds using surge.sh.
## 🚀 Features

- Built with modern JavaScript, using tools and frameworks like [create-react-app](https://github.com/facebook/create-react-app), [React-Router](https://reactrouter.com/), and SCSS.

## 🔧 Dependencies

[node](https://nodejs.org/) >= v16. Optionally, use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage node versions.

## 🚀 Setup and Running

1. Clone the repository:

    ```bash
    git clone git://github.com/henrywilson/personal-website.git
    cd personal-website
    ```

2. (Optional) Ensure you're on Node v16 or higher:

    ```bash
    nvm install
    node --version
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the application:

    ```bash
    npm start
    ```

By default, the application should be available at [http://localhost:3000/](http://localhost:3000/).

## 🚢 Deploying

### Static Export

For a static export without deploying to GitHub Pages:

- Remove or disable `.github/workflows/github-pages.yml`.
- Execute:

    ```bash
    npm run predeploy
    ```

This will generate a static version in `personal-site/build/` which you can host or deploy to a CDN.

- If not already installed run:

    ```bash
    npm install surge
    ```
    ```bash
    surge
    ```

- Set project directory to `personal-site/build/` 

### Deploying to GitHub Pages

1. Update the environment variables and Git remote URL in [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml).
2. Adjust the `homepage` value in `package.json` based on your hosting preferences.
3. Planning on using a custom domain? Update `public/CNAME`. Otherwise, remove it.

After making a commit to `main`, simply push your changes, and the deployment will be handled automatically.



## 🙌 Acknowledgements

- @mdangelo for the base. Initial template from [Future Imperfect](https://html5up.net/future-imperfect) for [HTML5 UP](html5up.net).
