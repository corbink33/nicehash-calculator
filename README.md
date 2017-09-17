# nicehash profit calculator
a customizable script to calculate the profitability of buying hashing power on nicehash

## usage
```bash
$ npm install
$ npm install -g ts-node typescript
$ ts-node index <...args>
```

## arguments
there's lots of them. you can put things in arguments.txt for them to be read automatically.

| argument | description | usage |
|:----------------:|:---------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------:|
| `--show-percent` | additionally shows how much % you will make/lose of your investment |  |
| `--min-profit=X` | only output data if the profit is greater than X btc or percent | `--min-profit=0.01` or `--min-profit=10%` |
| `--only-revenue` | only output revenue information |  |
| `--prompt` | wait for enter is pressed after each coin |  |
| `--fixed` | unfinished, please do not use. all results are inaccurate. |  |
| `--find-min` | find the minimum prices instead of average prices   note: much slower. this changes the output to have EU/US categories as they are different |  |
| `--location=X` | only find the prices in a certain marketplace. used with `--find-min` | `--location=eu` or `--location=us` |
| `--no-color` | disables color |  |
| `--no-header` | hides the header containing disclaimers and donation addresses |  |
| `--fixed-speed=X` | (for fixed orders) the requested speed to be used in price calculations | `--fixed-speed=1`

## Supported coins:
 * Bitcoin (SHA256)
 * Bitcoin Cash (SHA256)
 * Dash (X11)
 * Decred (Decred)
 * Dogecoin (Scrypt)
 * Ethereum (DaggerHashimoto)
 * Ethereum Classic (DaggerHashimoto)
 * Expanse (DaggerHashimoto)
 * Feathercoin (NeoScrypt)
 * Gamecredits (Scrypt)
 * Lbry (Lbry)
 * Litecoin (Scrypt)
 * Maxcoin (Keccak)
 * Monero (CryptoNight)
 * Musicoin (DaggerHashimoto)
 * Pascal (Pascal)
 * Sia (Sia)
 * Sibcoin (X11Gost)
 * Signatum (Skunk)
 * Ubiq (DaggerHashimoto)
 * Vertcoin (Lyra2REv2)
 * ZCash (Equihash)
