## LinkVault

[LinkVault](https://linkvault.com.ng/) stands as a beacon in the cryptocurrency landscape, transcending the role of a conventional wallet to become a harbinger of expansive crypto and Algorand adoption. This user-friendly platform is poised to revolutionize the crypto space by simplifying the process of onboarding a diverse range of users.

Paving the Way for Widespread Crypto and Algorand Adoption, Providing Non Custodial algorand wallets via a simple link or QR. Including Algorand Standard Asset Integration.

![image](https://i.postimg.cc/9ftVHJZx/1.jpg)

## 🎉 About.

[Linkvault](https://linkvault.com.ng) simplifies Algorand wallet creation with a one-click solution, Providing Non Custodial algorand wallets via a simple link or QR. Including Algorand Standard Asset Integration, making it perfect to share with family and friends that do not necessarily use crypto prior and removes the complexity of Secret Phrases. [Linkvault's SDK](https://www.npmjs.com/package/link-vault) empowers developers to unlock Algorand's potential, making it a hub for innovation.

To onboard more users across Africa, we need to look at building products in crypto that help users make payment for essential services with crypto.

[Remitflex](https://remitflex.com) erases fees and expands global accessibility. Remitflex covers remittances and payment of over 17,000 bill payments seamlessly, merging traditional finance with crypto and using the Linkvault sdk to process its USDC payment for services.

## 💫 Problem Description.

- Cryptocurrency Adoption Struggles:
  Challenge: Cryptocurrency adoption falters in the face of onboarding complexities and wallet management intricacies.

- Limitations in Traditional Finance:
  Challenge: Traditional remittance and bill payment systems grapple with exorbitant fees and geographical constraints.

## 🚀 The Solution.

- [Linkvault](https://linkvault.com.ng) disrupts the norm, offering a one-click solution for creating encrypted Algorand wallets, erasing barriers and ushering in instantaneous adoption.

- [Remitflex](https://remitflex.com) leveraging Algorand's stability and Linkvault's intuitive wallets, redefines financial transactions, eradicating fees, and expanding accessibility across diverse payment categories.

## 🔄 Architectural Flow.

Link vault & remitflex Architectural flow
![image](https://i.postimg.cc/2SR0npYn/Blank-diagram-1.jpg)
![image](https://i.postimg.cc/gjrHPtX8/Blank-diagram.jpg)

## 🤖 Tools & Technologies

- Link-Vault SDK our inhouse NPM package.
- ReactJS - web framework.
- TypeScript - for static typing.
- Express - (remitflex engine).
- algosdk - algorand for crafting transactions onchain.
- docker - for containerizing and easy development.
- Flutterwave SDK - payment gateway.
- Styled-Components - for styling.

## 🪙 Local installation

- make sure you have docker installed installed, download [HERE](https://www.docker.com/products/docker-desktop/)

* git clone the repository.

```
  $ git clone git@github.com:Samuellyworld/Link-vault.git
```

- go to `link-vault` directory on your terminal

```
  $ cd link-vault
```

- set your `.env` for `client`, `server` , `remitflex/frontend` and `remitflex/backend` folder.

* copy everything on `.env.example` to a newly created `.env` file for both `client`, `server` `remitflex/frontend` and `remitflex/backend` directory.

- build docker container and start app

```
docker-compose up  --build
```

## 👨🏼‍🍳 Team.

- [David Kazeem](https://github.com/davonjagah)
- [Samuel Tosin](https://github.com/Samuellyworld)
- [Ikuesan Emmanuel](https://ng.linkedin.com/in/ikuesan-emmanuel-7b312b165)

## 🔗 Links.

- [Live](https://linkvault.com.ng/)
- [NPM Package](https://www.npmjs.com/package/link-vault)
- [Figma](https://www.figma.com/file/RayAw3ELTPhG1gYUzYeB9Z/LinkVault-%26-Remit-Flex?type=design&node-id=0-1&mode=design&t=zdH2M2YPHB8CK0Bp-0)
- [Youtube](https://www.youtube.com/watch?v=y_CYJotFLYM)
- [Deck](https://drive.google.com/file/d/1xsRDn525CR-bs2bUAaGg86YVk0UCX5Mh/view)
- [RemitFlex Post man API Documentation](https://documenter.getpostman.com/view/9070802/2s9YXmWzwh)

## 🪪 License.

Copyright LinkVault 2023 [**MIT LICENSE**](/LICENSE)
