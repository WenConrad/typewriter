const sentence = "hello there from lighthouse labs";
const typewrite = sentence + '\n';
for (const char in typewrite) {
  setTimeout(() => {
    process.stdout.write(typewrite[char]);
  }, char * 50)
}