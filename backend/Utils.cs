using caesar.Models;

namespace UtilFunctions;

public static class Utils
{
    private const int ShiftMax = 26;

    public static Func<char, char> Shift(int shift)
    {
        char Wrapper(char letter)
        {
            return (char)(letter + shift % ShiftMax);
        }
        return Wrapper;
    }

    public static Func<char, char> UnShift(int shift)
    {
        return Shift(shift * -1);
    }

    public static CipherResponse HandleCipherRequest(CipherRequest request,
                                                     Func<int,Func<char, char>> shiftFunction)
    {
        var shiftAmount = request.Key;
        var cipherText = request.Text;
        var shiftedCharacters = cipherText.Select(shiftFunction(shiftAmount));
        var plainText = string.Join("", shiftedCharacters);
        return new CipherResponse {
            Text=plainText
        };
    }

}

