# irma-gemeente

## CLI Commands

``` bash
# install dependencies
yarn install

# update dependencies to latest version
yarn upgrade

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

```
For detailed explanation on how things work, checkout the Preact [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

```
### updating images

# imagemick is needed for image conversion
sudo apt install imagemagick 

# pngcrush is also needed
sudo apt-get install pngcrush

remove the `out` directory in `../irma-gemeente/meta`
run `./convert-logos.sh `
copy images from `out` to `../irma-gemeente/src/assets/gemeenten-logos`

```