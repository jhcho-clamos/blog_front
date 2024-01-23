const AnsiColor = {
  BLACK: "\x1b[30m",
  RED: "\x1b[31m",
  GREEN: "\x1b[32m",
  YELLOW: "\x1b[33m",
  BLUE: "\x1b[34m",
  MAGENTA: "\x1b[35m",
  WHITE: "\x1b[37m",
  BRIGHT_BLACK: "\x1b[90m",
  BRIGHT_RED: "\x1b[91m",
  BRIGHT_GREEN: "\x1b[92m",
  BRIGHT_YELLOW: "\x1b[93m",
  BRIGHT_BLUE: "\x1b[94m",
  BRIGHT_MAGENTA: "\x1b[95m",
  BRIGHT_WHITE: "\x1b[97m",
  RESET: "\x1b[0m",
};
const bannerText = `${AnsiColor.BRIGHT_BLUE}████████████████████████████████████████████████████████████████████████████████
${AnsiColor.BRIGHT_BLUE}████████████████████████████████████████████████████████████████████████████████
${AnsiColor.RED}██████████████████${AnsiColor.BRIGHT_BLUE}████████████████${AnsiColor.BLACK}██████████████████████████████${AnsiColor.BRIGHT_BLUE}████████████████
${AnsiColor.RED}████████████████████████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██████████████████████████████${AnsiColor.BLACK}██${AnsiColor.BRIGHT_BLUE}██████████████
${AnsiColor.BRIGHT_RED}████${AnsiColor.RED}██████████████████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██████${AnsiColor.MAGENTA}██████████████████████${AnsiColor.WHITE}██████${AnsiColor.BLACK}██${AnsiColor.BRIGHT_BLUE}████████████
${AnsiColor.BRIGHT_RED}██████████████████████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}████${AnsiColor.MAGENTA}████████████████${AnsiColor.BLACK}████${AnsiColor.MAGENTA}██████${AnsiColor.WHITE}████${AnsiColor.BLACK}██${AnsiColor.BRIGHT_BLUE}██${AnsiColor.BLACK}████${AnsiColor.BRIGHT_BLUE}██████
${AnsiColor.BRIGHT_RED}██████████████████████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██${AnsiColor.MAGENTA}████████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}████${AnsiColor.BLACK}██${AnsiColor.MAGENTA}██████${AnsiColor.WHITE}██${AnsiColor.BLACK}████${AnsiColor.WHITE}████${AnsiColor.BLACK}██${AnsiColor.BRIGHT_BLUE}████
${AnsiColor.BRIGHT_YELLOW}██████████████████${AnsiColor.BRIGHT_RED}████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██${AnsiColor.MAGENTA}████████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██████${AnsiColor.MAGENTA}██████${AnsiColor.WHITE}██${AnsiColor.BLACK}██${AnsiColor.WHITE}██████${AnsiColor.BLACK}██${AnsiColor.BRIGHT_BLUE}████
${AnsiColor.BRIGHT_YELLOW}██████████████████████${AnsiColor.BLACK}██${AnsiColor.BRIGHT_YELLOW}██████${AnsiColor.BLACK}██${AnsiColor.WHITE}██${AnsiColor.MAGENTA}████████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██████${AnsiColor.BLACK}████████${AnsiColor.WHITE}████████${AnsiColor.BLACK}██${AnsiColor.BRIGHT_BLUE}████
${AnsiColor.BRIGHT_YELLOW}████████████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██${AnsiColor.BLACK}██${AnsiColor.BRIGHT_YELLOW}████${AnsiColor.BLACK}██${AnsiColor.WHITE}██${AnsiColor.MAGENTA}████████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██████████████████████${AnsiColor.BLACK}██${AnsiColor.BRIGHT_BLUE}████
${AnsiColor.BRIGHT_GREEN}██████████████████${AnsiColor.BRIGHT_YELLOW}██${AnsiColor.BLACK}██${AnsiColor.WHITE}██${AnsiColor.BLACK}████████${AnsiColor.WHITE}██${AnsiColor.MAGENTA}██████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██████████████████████████${AnsiColor.BLACK}██${AnsiColor.BRIGHT_BLUE}██
${AnsiColor.BRIGHT_GREEN}██████████████████████${AnsiColor.WHITE}████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██${AnsiColor.MAGENTA}██████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██████${AnsiColor.BRIGHT_YELLOW}██${AnsiColor.WHITE}██████████${AnsiColor.BRIGHT_YELLOW}██${AnsiColor.BLACK}██${AnsiColor.WHITE}████${AnsiColor.BLACK}██${AnsiColor.BRIGHT_BLUE}██
${AnsiColor.BRIGHT_GREEN}██████████████████████${AnsiColor.BLACK}████${AnsiColor.WHITE}████${AnsiColor.BLACK}██${AnsiColor.WHITE}██${AnsiColor.MAGENTA}██████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██████${AnsiColor.BLACK}██${AnsiColor.WHITE}██████${AnsiColor.BLACK}██${AnsiColor.WHITE}██${AnsiColor.BLACK}████${AnsiColor.WHITE}████${AnsiColor.BLACK}██${AnsiColor.BRIGHT_BLUE}██
${AnsiColor.BLUE}██████████████████${AnsiColor.BRIGHT_GREEN}████████${AnsiColor.BLACK}██████${AnsiColor.WHITE}██${AnsiColor.MAGENTA}██████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██${AnsiColor.MAGENTA}████${AnsiColor.WHITE}████████████████${AnsiColor.MAGENTA}████${AnsiColor.BLACK}██${AnsiColor.BRIGHT_BLUE}██
${AnsiColor.BLUE}██████████████████████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}████${AnsiColor.MAGENTA}██████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██████${AnsiColor.BLACK}████████████${AnsiColor.WHITE}████${AnsiColor.BLACK}██${AnsiColor.BRIGHT_BLUE}████
${AnsiColor.BRIGHT_BLUE}██████████████████${AnsiColor.BLUE}████${AnsiColor.BLUE}██████${AnsiColor.BLACK}████${AnsiColor.WHITE}██████${AnsiColor.MAGENTA}██████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██████████████████${AnsiColor.BLACK}██${AnsiColor.BRIGHT_BLUE}██████
${AnsiColor.BRIGHT_BLUE}██████████████████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██${AnsiColor.BLACK}████${AnsiColor.WHITE}████████████████████${AnsiColor.BLACK}██████████████████${AnsiColor.BRIGHT_BLUE}████████
${AnsiColor.BRIGHT_BLUE}████████████████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}██████${AnsiColor.BLACK}████████████████████████████████${AnsiColor.WHITE}██${AnsiColor.BLACK}██${AnsiColor.BRIGHT_BLUE}████████████
${AnsiColor.BRIGHT_BLUE}████████████████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}████${AnsiColor.BLACK}██${AnsiColor.BRIGHT_BLUE}██${AnsiColor.BLACK}██${AnsiColor.WHITE}████${AnsiColor.BRIGHT_BLUE}████████████${AnsiColor.BLACK}██${AnsiColor.WHITE}████${AnsiColor.BLACK}████${AnsiColor.WHITE}████${AnsiColor.BLACK}██${AnsiColor.BRIGHT_BLUE}████████████
${AnsiColor.BRIGHT_BLUE}████████████████████████${AnsiColor.BLACK}██████${AnsiColor.BRIGHT_BLUE}████${AnsiColor.BLACK}██████${AnsiColor.BRIGHT_BLUE}████████████${AnsiColor.BLACK}██████${AnsiColor.BRIGHT_BLUE}████${AnsiColor.BLACK}██████${AnsiColor.BRIGHT_BLUE}████████████
████████████████████████████████████████████████████████████████████████████████`;

const nextjsBanner = `
,--.  ,--.,------.,--.   ,--.,--------.      ,--. ,---.   
|  ,'.|  ||  .---' \\  \`.'  / '--.  .--'      |  |'   .-'  
|  |' '  ||  \`--,   .'    \\     |  |    ,--. |  |\`.  \`-.  
|  | \`   ||  \`---. /  .'.  \\    |  |.--.|  '-'  /.-'    | 
\`--'  \`--'\`------''--'   '--'   \`--''--' \`-----' \`-----' 
`;

console.log(bannerText + nextjsBanner);
