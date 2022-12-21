<!--

██████╗ ██╗ ██████╗ ███████╗ ██████╗ ███╗   ██╗                    
██╔══██╗██║██╔════╝ ██╔════╝██╔═══██╗████╗  ██║                    
██████╔╝██║██║  ███╗█████╗  ██║   ██║██╔██╗ ██║                    
██╔═══╝ ██║██║   ██║██╔══╝  ██║   ██║██║╚██╗██║                    
██║     ██║╚██████╔╝███████╗╚██████╔╝██║ ╚████║                    
╚═╝     ╚═╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝                    
                                                                   
██████╗  ██████╗ ███████╗███████╗███████╗                          
██╔══██╗██╔═══██╗██╔════╝██╔════╝██╔════╝                          
██████╔╝██║   ██║███████╗███████╗█████╗                            
██╔═══╝ ██║   ██║╚════██║╚════██║██╔══╝                            
██║     ╚██████╔╝███████║███████║███████╗                          
╚═╝      ╚═════╝ ╚══════╝╚══════╝╚══════╝                          
                                                                   
                                                                   
                                                                   
█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗                   
╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝                   
                                                                   
                                                                   
                                                                   
██████╗ ██╗  ██╗ ██████╗                                           
██╔══██╗██║ ██╔╝██╔════╝                                           
██████╔╝█████╔╝ ██║  ███╗                                          
██╔═══╝ ██╔═██╗ ██║   ██║                                          
██║     ██║  ██╗╚██████╔╝                                          
╚═╝     ╚═╝  ╚═╝ ╚═════╝                                           
                                                                   
███████╗██╗  ██╗████████╗███████╗███╗   ██╗██████╗ ███████╗██████╗ 
██╔════╝╚██╗██╔╝╚══██╔══╝██╔════╝████╗  ██║██╔══██╗██╔════╝██╔══██╗
█████╗   ╚███╔╝    ██║   █████╗  ██╔██╗ ██║██║  ██║█████╗  ██║  ██║
██╔══╝   ██╔██╗    ██║   ██╔══╝  ██║╚██╗██║██║  ██║██╔══╝  ██║  ██║
███████╗██╔╝ ██╗   ██║   ███████╗██║ ╚████║██████╔╝███████╗██████╔╝
╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═════╝ 
                                                                   
███████╗ ██████╗██████╗ ██╗██████╗ ████████╗███████╗               
██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝██╔════╝               
███████╗██║     ██████╔╝██║██████╔╝   ██║   ███████╗               
╚════██║██║     ██╔══██╗██║██╔═══╝    ██║   ╚════██║               
███████║╚██████╗██║  ██║██║██║        ██║   ███████║               
╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   ╚══════╝    
                                                                   

CREATED BY ANGELO
FOR PIGEONPOSSE.COM

-->

# PKG-EXTENDED-SCRIPTS by PIGEONPOSSE™

[![License](https://img.shields.io/github/license/pigeon-posse/pkg-extended-scripts?color=blue&label=License&style=flat-square)](https://npmjs.com/package/@pigeon-posse/pkg-extended-scripts)
[![Version](https://img.shields.io/npm/v/@pigeon-posse/pkg-extended-scripts?color=a1b858&label&style=flat-square)](https://npmjs.com/package/@pigeon-posse/pkg-extended-scripts)
[![Web](https://img.shields.io/badge/Web-grey?style=flat-square)](https://pigeonposse.com/) 
[![About us](https://img.shields.io/badge/About-us-grey?style=flat-square)](https://pigeonposse.com/?popup=about) 
[![Donate](https://img.shields.io/badge/Donate-pink?style=flat-square)](https://pigeonposse.com/?popup=donate) 

> :warning: **This package is still in _beta_ version**. It can be installed and used but things may change in the future.

## 🗒 Description

**List all your scripts in a separate file to the _package.json_**

Separate the package.json scripts to another file and run them with the ```pes``` or ```pkg-extended-scripts``` **command**

## 🔑 Installation

### Using NPM

```bash
npm install @pigeon-posse/pkg-extended-scripts
```

## ⚙️ Usage

1. create a file named ```package.scripts.json```, you can use the extensions ```.js``` or ```.yml``` and ```yaml```.
2. Write your scripts to the file. for example:
	- In ```package.scripts.json```
	```json
	{
		"hello" : "echo 'Hello pigeon 🐦🌈'"
	}
	```
3. Run these scripts using the ```pes``` or ```pkg-extended-scripts``` **commands**

That's it, now you can list all your scripts in a separate file to the package.json

### Optional
If you use the package it may be good practice to leave a scripts in the package.json that indicates that the scripts are in a separate file. For example:
- In ```package.json```
```json
{
	"scripts" : {
		"ext-scripts": "npx pes"
	}
}
```

## 👨‍💻 Development

You can contribute via **_Github_**

[![Issues](https://img.shields.io/badge/Issues-grey?style=flat-square)](https://github.com/pigeon-posse/pkg-extended-scripts/issues)
[![Pull requests](https://img.shields.io/badge/Pulls-grey?style=flat-square)](https://github.com/pigeon-posse/pkg-extended-scripts/pulls)


## ☕ Donate

Help us to develop more interesting things.

[![Donate](https://img.shields.io/badge/Donate-grey?style=flat-square)](https://pigeonposse.com/?popup=donate) 


## 📜 License

This sofware is licensed with GPLv3 (GNU GENERAL PUBLIC LICENSE Version 3)

[![Read more](https://img.shields.io/badge/Read-more-grey?style=flat-square)](https://github.com/pigeon-posse/pkg-extended-scripts/blob/main/LICENSE)

## 🐦 About us

_PigeonPosse_ is a ✨ **code development collective** ✨ focused on creating practical and interesting tools that help developers and users enjoy a more agile and comfortable experience. Our projects cover various programming sectors and we do not have a thematic limitation in terms of projects.

[![More](https://img.shields.io/badge/Read-more-grey?style=flat-square)](https://github.com/PigeonPosse/PigeonPosse)

### Collaborators

|                                                                                    | Name        | Role         | GitHub                                         |
| ---------------------------------------------------------------------------------- | ----------- | ------------ | ---------------------------------------------- |
| <img src="https://github.com/AngelEspejo.png?size=72" style="border-radius:100%"/> | AngelEspejo | Author       | [@AngelEspejo](https://github.com/AngelEspejo) |
| <img src="https://github.com/PigeonPosse.png?size=72" style="border-radius:100%"/> | PigeonPosse | Collective	  | [@PigeonPosse](https://github.com/PigeonPosse) |


<br>