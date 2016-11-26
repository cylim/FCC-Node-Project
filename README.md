# Introduction
This project is for all Node API project from Free Code Camp

## 1. Timestamp API
Convert date to timestamp and vice versa.

### Instructions
1. Think of the timestamp or date you would like to convert
2. Place it after the link: https://cyfcc.herokuapp.com/api/time/

### Example Usages
1. [https://cyfcc.herokuapp.com/api/time/December%2015,%202015](https://cyfcc.herokuapp.com/api/time/December%2015,%202015)
2. [https://cyfcc.herokuapp.com/api/time/1450137600](https://cyfcc.herokuapp.com/api/time/1450137600)

### Example Results
``` { "unix": 1450137600, "natural": "December 15, 2015" } ```

## 2. Request Header Parser
Get user computer IP, language and OS.

### Example Usages
1. Visit [https://cyfcc.herokuapp.com/api/whoami](https://cyfcc.herokuapp.com/api/whoami)

### Example Results
``` {"ipaddress":"127.0.0.1","language":"en-us","software":"Macintosh; Intel Mac OS X 10_12_1"} ```

## 3. URL Shortener
Get a URL, then create a shorter URL which redirect to the URL. Visit [Cyfcc](https://cyfcc.herokuapp.com/api/shortener/) for details.

### Example Usages
1. [https://cyfcc.herokuapp.com/api/shortener?url=https://www.google.com](https://cyfcc.herokuapp.com/api/shortener?url=https://www.google.com)

### Example Results
``` { "original_url":"https://google.com", "short_url":"https://cyfcc.herokuapp.com/api/shortener/Dx2J" } ```

## 4. Image Search Abstraction Layer
Allow user to search for images, and see what the history

### Example Usages
1. [https://cyfcc.herokuapp.com/api/image/cat](https://cyfcc.herokuapp.com/api/image/cat)
2. [https://cyfcc.herokuapp.com/api/image/cat?offset=2](https://cyfcc.herokuapp.com/api/image/cat?offset=2)

*offset is for pagination, 2 means second page.

### Example Results
``` {"url":"https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg","snippet":"Cats scared of Cucumbers ...","thumbnail":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIpKVlrysjWTWyDxnvCg12eSyOy2CcISl-ZyHcTmhmhp-zL78Mq7s0_4Li","context":"https://www.youtube.com/watch?v=cNycdfFEgBc"}  ```

# References
1. [Timestamp API](https://www.freecodecamp.com/challenges/timestamp-microservice)
2. [Request Header Parser](https://www.freecodecamp.com/challenges/request-header-parser-microservice)
3. [URL Shortener](https://www.freecodecamp.com/challenges/url-shortener-microservice)
4. [Image Search Abstraction Layer](https://www.freecodecamp.com/challenges/image-search-abstraction-layer)