string s = "MDCL";
char[] array = s.ToCharArray();
int result = 0;
for (int i = 0; i < array.Length; i++)
{
    if (array[i] == "I") result += 1;
    else if (array[i] == "V") result += 5;
    else if (array[i] == "X") result += 10;
    else if (array[i] == "L") result += 50;
    else if (array[i] == "C") result += 100;
    else if (array[i] == "D") result += 500;
    else if (array[i] == "M") result += 1000;
}
return result;

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000