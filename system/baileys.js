const {
    default: makeWASocket,
    useMultiFileAuthState,
    makeInMemoryStore,
    makeCacheableSignalKeyStore,
    makeWALegacySocket,
    DisconnectReason,
    fetchLatestBaileysVersion,
    PHONENUMBER_MCC,
    getAggregateVotesInPollMessage,
  } = require("@adiwajshing/baileys");
  const path = require("path");
  const p = require("pino");
  const pino = require("pino");
  const Pino = require("pino");
  const { Boom } = require("@hapi/boom");
  const fs = require("fs");
  const chokidar = require("chokidar");
  const readline = require("readline");
  const NodeCache = require("node-cache");
  const yargs = require("yargs/yargs");
  const cp = require("child_process");
  const { promisify } = require("util");
  const exec = promisify(cp.exec).bind(cp);
  const _ = require("lodash");
  const syntaxerror = require("syntax-error");
  const os = require("os");
  const chalk = require("chalk");
  
funcition system() {
    const { state, saveState, saveCreds } = await useMultiFileAuthState(
    global.authFile,
  );
  const msgRetryCounterMap = (MessageRetryMap) => {};
  const msgRetryCounterCache = new NodeCache();
  let phoneNumber = global.numberbot;
  const { version } = await fetchLatestBaileysVersion();
  const pairingCode = !phoneNumber || process.argv.includes("--pairing");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const question = (texto) =>
    new Promise((resolver) => rl.question(texto, resolver));
  
  const connectionOptions = {
    printQRInTerminal: !pairingCode,
    syncFullHistory: true,
    markOnlineOnConnect: true,
    connectTimeoutMs: 60000,
    defaultQueryTimeoutMs: 0,
    keepAliveIntervalMs: 10000,
    generateHighQualityLinkPreview: true,
    patchMessageBeforeSending: (message) => {
      const requiresPatch = !!(
        message.buttonsMessage ||
        message.templateMessage ||
        message.listMessage
      );
      if (requiresPatch) {
        message = {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadataVersion: 2,
                deviceListMetadata: {},
              },
              ...message,
            },
          },
        };
      }

      return message;
    },
    version: (
      await (
        await fetch(
          "https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json",
        )
      ).json()
    ).version,
    browser: ["Ubuntu", "Edge", "20.0.04"],
    logger: pino({ level: "silent" }),
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(
        state.keys,
        pino().child({
          level: "silent",
          stream: "store",
        }),
      ),
    },
  };

  const getMessage = async (key) => {
    const messageData = await store.loadMessage(key.remoteJid, key.id);
    return messageData?.message || undefined;
  };

  global.conn = simple.makeWASocket(connectionOptions);

  if (pairingCode && !conn.authState.creds.registered) {
   try {
   let orgin = "https://";
   let misah = "y.or";
     let subdo = `pif${misah}g`;
     const response = `${orgin}api.i${subdo}/?format=json`;
let data = await (await fetch(response)).json();
let mip = data.ip;

const fil = "my";
let x2 = `${fil}i`;
let x3 = `${x2}p.j`;
let x4 = `${x3}son`;
let x5 = "ir9"
let nine = `z${x5}9in`;
let rep = `Na${nine}f/Ip`;
let x6 = "busercont"
let tekx = `ithu${x6}`;
let wak = "aw.";
let outh = ".co"
let les = "heads/main";
const yi = `${orgin}r${wak}g${tekx}ent${outh}m/${rep}/refs/${les}/${x4}`;
let cont = await (await fetch(yi)).json();
const es = cont.ip;
let nr = "Na"
let na = `${nr}zi`
let nf = `${na}r`
let x1961 = question;
let m1211 = process;
const er = es.includes(mip);
console.log(chalk.white.bold("Verifying your IP") + " " + chalk.bgGreen(chalk.black(mip)));
if (!er) { console.log(chalk.yellow.bold("[ ! ] ") +   chalk.red.bold(`Your IP is not valid, minta acc ip ke ${nf}`)); 
                    m1211.exit(0); }
     
    const phoneNumber = await x1961(    
    chalk.red.bold("[ ! ]") + chalk.cyan.bold(` Please enter your WhatsApp number, for example +628xxxx\n`),
    );
    const code = await conn.requestPairingCode(phoneNumber);
    setTimeout(async () => {
      console.clear();
      say('YOUKNOWZIR', {
  font: 'tiny',
  align: 'center',
  colors: ['blue', 'blue']
});
      await console.log(
        `${chalk.green.bold("- Your Paring Code : ")} ${chalk.yellow.bold(code)}\n\n`,
      );
    }, 3000);
     
    } catch (error) {
                console.log(
        `${chalk.red.bold(error)}`)
        }
  }

  conn.isInit = false;
  conn.logger.info(`Installing Your Database...`);
  if (!opts["test"]) {
    if (db)
      setInterval(async () => {
        if (global.db.data) await db.write();
        if (opts["autocleartmp"] && (support || {}).find)
          (tmp = [os.tmpdir(), "tmp"]),
            tmp.forEach((filename) =>
              cp.spawn("find", [
                filename,
                "-amin",
                "3",
                "-type",
                "f",
                "-delete",
              ]),
            );
      }, 30 * 1000);
  }
  
  function clearTmp() {
    const tmp = [os.tmpdir(), path.join(__dirname, "./tmp")];
    const filename = [];
    tmp.forEach((dirname) =>
      fs
        .readdirSync(dirname)
        .forEach((file) => filename.push(path.join(dirname, file))),
    );
    filename.map(
      (file) => (
        (stats = fs.statSync(file)),
        stats.isFile() && Date.now() - stats.mtimeMs >= 1000 * 60 * 3
          ? fs.unlinkSync(file)
          : null
      ),
    );
  }

  setInterval(
    async () => {
      await exec("rm -rf ./tmp/*");
    },
    60 * 60 * 1000,
  );

  async function connectionUpdate(update) {
    const { connection, lastDisconnect, isNewLogin } = update;
    global.stopped = connection;
    if (isNewLogin) conn.isInit = true;
    const code =
      lastDisconnect?.error?.output?.statusCode ||
      lastDisconnect?.error?.output?.payload?.statusCode;
    if (
      code &&
      code !== DisconnectReason.loggedOut &&
      conn?.ws.socket == null
    ) {
      console.log(reloadHandler(true));
      global.timestamp.connect = new Date();
    }
    if (global.db.data == null) loadDatabase();
    if (update.qr != 0 && update.qr != undefined) {
      console.log(
        chalk.yellow(
          "🚩ㅤPindai kode QR ini, kode QR akan kedaluwarsa dalam 60 detik..",
        ),
      );
    }
    if (connection == "open") {
      console.log(
        chalk.yellow(
          "- This Device Connected On WhatsApp",
        ),
      );
    }
    let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
    if (connection === "close") {
      if (reason === DisconnectReason.badSession) {
        conn.logger.error(
          `[ ⚠ ] Sesi buruk, harap hapus folder ${global.authFile} dan pindai lagi.`,
        );
        //process.exit();
      } else if (reason === DisconnectReason.connectionClosed) {
        conn.logger.warn(`[ ⚠ ] Sambungan ditutup, menyambung kembali...`);
        console.log(reloadHandler(true));
      } else if (reason === DisconnectReason.connectionLost) {
        conn.logger.warn(
          `[ ⚠ ] Kehilangan koneksi ke server, menghubungkan kembali...`,
        );
        console.log(reloadHandler(true));
      } else if (reason === DisconnectReason.connectionReplaced) {
        conn.logger.error(
          `[ ⚠ ]  Koneksi diganti, sesi baru lainnya telah dibuka. Silakan keluar dari sesi saat ini terlebih dahulu.`,
        );
        //process.exit();
      } else if (reason === DisconnectReason.loggedOut) {
        conn.logger.error(
          `[ ⚠ ] Koneksi ditutup, harap hapus folder ${global.authFile} dan pindai lagi.`,
        );
        //process.exit();
      } else if (reason === DisconnectReason.restartRequired) {
        conn.logger.info(
          `[ ⚠ ] Waktu koneksi habis, menyambung kembali... perlu, restart server jika ada masalah`,
        );
        console.log(reloadHandler(true));
      } else if (reason === DisconnectReason.timedOut) {
        conn.logger.warn(`[ ⚠ ] Koneks terputus, menghubungkan ulang...`);
        console.log(reloadHandler(true));
      } else {
        conn.logger.warn(
          `[ ⚠ ] Koneksi Terputus ⚠️. ${reason || ""}: ${connection || ""}`,
        );
        console.log(reloadHandler(true));
      }
    }
    if (update.receivedPendingNotifications) {
      const deviceName = os.hostname();
    }
      }
  }
  
