

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".



// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"


string DefangIPaddr(string address)
{
    for (int i = 0; i < address.Length; i++)
    {
        if (address[i] == '.') address[i] = "[.]";
    }
    return address;
}


string a = "1.1.1.1";
Console.WriteLine(DefangIPaddr(a));