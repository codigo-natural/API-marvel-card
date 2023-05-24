## Para Empezar
- clona el repositorio
- instala las dependencias 
  
**configuara variables de entorno `.env`**

para consumir la api de Marvel es necesario estar **registrado** y obtener los **tokens**:
- privado
- publico
 y luego un [gerar un hash](https://www.md5hashgenerator.com/) que lo obtienes de colocar `1 + token privado + token publico` al realizar esto te genera un hash el cual lo deves colocar el la url de la api de esta manera: `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${process.env.NEXT_PUBLIC_MARVEL_API_KEY`
- el archivo `.env` deveria estar de la siguiente manera:
  NEXT_PUBLIC_MARVEL_API_KEY=`token_publicohash=el_hash_generado`

corre el servidor de desarrollo

```bash
npm run dev
```

Habre [http://localhost:3000](http://localhost:3000) Con tu navegador para ver los resultados