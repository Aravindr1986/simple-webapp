import app from './app.js'


/**
 * Bootstrap the application. Start express.
 */
const PORT = process.env.NODE_ENV === "DEV" ? 8000 : 3000 
const main = async () => {
  try {
    app.listen(PORT);   
    console.log(`App started in ${PORT}`)
    app.emit(`appStarted in ${PORT}`);

  } catch (err) {
    console.error(err);
    console.error(`Setup Error -- Exiting`);
    process.exit(1);
  }
};

main();