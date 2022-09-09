string s = "MCMXCIV";
int result = 0;
for (int i = 0; i < s.Length; i++)
{
    if (s[i] == 'I') result += 1;
    else if (s[i] == 'V')
    {
        result += 5;
        if (i > 0 && s[i - 1] == 'I') result -= 2;
    }

    else if (s[i] == 'X')
    {
        result += 10;
        if (i > 0 && s[i - 1] == 'I') result -= 2;
    }

    else if (s[i] == 'L')
    {
        result += 50;
        if (i > 0 && s[i - 1] == 'X') result -= 20;
    }

    else if (s[i] == 'C')
    {
        result += 100;
        if (i > 0 && s[i - 1] == 'X') result -= 20;
    }

    else if (s[i] == 'D')
    {
        result += 500;
        if (i > 0 && s[i - 1] == 'C') result -= 200;
    }

    else if (s[i] == 'M')
    {
        result += 1000;
        if (i > 0 && s[i - 1] == 'C') result -= 200;
    }
}
System.Console.WriteLine(result);

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.