# Phaser Editor 2D Marketplace

This repository contains the sources of the [Phaser Editor 2D Marketplace](https://phasereditor2d.com) website. It is developed & maintained by the Phaser Editor 2D developers.

The goal of this marketplace is to display and organize some of the content generated around the Phaser Editor 2D (and hopefully Phaser) community. If you created a project template, an example, a plugin, a tutorial, a blog, related to Phaser development, then you can list it here.

## Build

This is how you can build & run the site:

```
git clone https://github.com/PhaserEditor2D/PhaserEditor2D-marketplace.git
cd PhaserEditor2D-marketplace
npm install
npm run build
npm run server
```

It creates a `www` folder with the website and starts a local server at [http://127.0.0.1:8080](http://127.0.0.1:8080).

You can start a process for re-build the site when you modify it:

```
npm start
```

## Contribution guide

The website has the following content types:

* Author (`content/en/authors`)
* Project starter (`content/en/starters`)
* Example (`content/en/examples`)
* Plugin (`content/en/plugins`)
* Website (`content/en/websites`)
* Library (`content/en/libs`)

Each content type has different properties. We should write a guide about it, but for now you can take a look to everything in the `content/en` folder.

In general, the site is based on pages. Each folder is a page. A sub-folder is a sub-page. Each page (folder), must have:

* A `page.md` file. It contains the page's metadata and content, in markdown syntax. 
* An `assets/` folder. It contains the images related to the page.
 
If you want to contribute to this repository, please, fork it and make a pull request to the `master` branch.

If you have no experience with GitHub or this is too complex for you, please, create an issue with the data you want to add and I will add it for you.

## Some considerations when adding content

* Use only alpha-numeric characters in the name of the folders, and the `-` char as separator.
* If you add a new project starter, example, plugin, etc... please, prefix the name of the folder with the name of your user. For example, if you are adding a new `point-and-click-example`, and your user name is `maria`, please, name the template's folder like this: `maria-point-and-click`.
* Please, use the JPG format for the banner & screenshot images. Only use PNG images when transparency is required.

## Image cache

This website is configured to cache all static images. This means, if you modify an image, like a profile image, a banner, etc..  you should change the name of the image. This way, you avoid the browser to show the old version of the image.

For example, if you have a `profile.png` image, and you want to update it, then delete `profile.png` and add `profile-v2.png`. Also, update the `page.md` file and replace all ocurrencies of the image's name with the new `profile-v2.png` name.

## TODO

For now, the priority is to add more content to the website and create a friendly, visual, local, admin interface.



