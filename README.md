# Javier Vilchis React Js Portfolio

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and modified to use Javier Vilchis portfolio from .
Take a look at the live portfolio at [www.javivilchis.com](www.javivilchis.com).

## Table Of Contents

- Project
- Dependencies
- Browse
- How to contribute
- contact
- How-to
- Bug Fixes


## Project

This project is to show the creation of a website by utilizing react cli.

## Dependencies

This project is dependent on React Js.
This project utilizes Router and Styled Components

## How to contribute

You can download a copy of this repository and upload suggestions within a branch name it "contribution upload version 1".

## Contact

If you have any questions or concers, please send an email to javivilchis@gmail.com.

## How-to
how to do many things in React app when deployed to an apache server.
combat the reload issue within a static site when using React Router-Dom - I spent some time looking into this issue and this is what worked!
1. create an .htaccess file and add the following code to it.
```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```
2. upload the file in the same directory as your index.html file and in my case I had to wait a few minutes for the file to propagate in my server.
3. check your site and voila!

## Bug Fixes 
20211115.1 updates to the backend service to keep track on the build number when deployed to production.
20211109.4 updates to contact page for plugin in the contact service to send out emails to me.
20211104.3 troubleshoot the router issue when the pages were reloaded in a PHP server it would give back a 404 error.
20211101.1 released website to production.
