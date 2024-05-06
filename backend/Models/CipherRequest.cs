namespace caesar.Models;

public class CipherRequest
{
    public string Text { get; set; } = string.Empty;

    public int Key { get; set; } = 0;
}
