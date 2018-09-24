var args = process.argv.slice(2);
console.log(args);

function obfuscate(str)
{
  var pass = "";
  var char;

  for (var i = 0; i < str.length; i++)
  {
    char = str.charAt(i);
    if (char == 'a')
    {
      char = '4';
    }
    else if (char == 'e')
    {
      char = '3';
    }
    else if (char == 'o')
    {
      char = '0';
    }
    else if (char == 'l')
    {
      char = '1';
    }

    pass += char;
  }

  return pass;
}

console.log("Your password is:", obfuscate(args[0]));