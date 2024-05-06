using Microsoft.AspNetCore.Mvc;
using caesar.Models;
using static UtilFunctions.Utils;

namespace caesar.Controllers;

[ApiController]
[Route("caesar")]
public class CaesarController : ControllerBase
{
    private readonly ILogger<CaesarController> _logger;

    public CaesarController(ILogger<CaesarController> logger)
    {
        _logger = logger;
    }

    [HttpPost("encrypt")]
    public CipherResponse Encrypt(CipherRequest encryptRequest)
    {
        return HandleCipherRequest(encryptRequest, Shift);
    }

    [HttpPost("decrypt")]
    public CipherResponse Decrypt(CipherRequest decryptRequest)
    {
        return HandleCipherRequest(decryptRequest, UnShift);
    }

}
