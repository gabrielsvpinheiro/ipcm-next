yarn create next-app ipcm-next --typescript

git remote add origin git@github.com:gabrielsvpinheiro/ipcm-next.git
git branch -M main
git push -u origin main

- yarn add typescript @types/node @types/react -D
- yarn add react-hook-form
- yarn add tailwindcss postcss autoprefixer -D
- yarn add @tailwindcss/forms -D
- yarn add tailwindcss-animate -D
- yarn add prettier eslint-config-prettier -D
- npx eslint --init
- npx tailwindcss init -p
- npx husky-init

kill -9 $(lsof -ti:3000)

