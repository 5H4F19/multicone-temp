import colors from 'colors'
import logSymbols from 'log-symbols';



export const warning = () => {
    console.log(`\n${colors.bgRed('File already exists')}\n`)
}
export const initError = () => {
    console.error(`\n${colors.dim(`Run ${colors.yellow('"multicone init <app name>"')} to initiate the app first\n`)}`);
}
export const failed = (name) => {
    console.log(`\n ${colors.red(colors.bold('X'))} ${name} creation failed\n`);
}
export const success = (name) => {
    console.log('\n',logSymbols.success,`${colors.green(colors.bold(`${name} created succesfully.`))}\n`);
}