import { FC } from 'react';

import { Box } from '../Box';

import { Copyright } from './Copyright';

export const MediaLinkList: FC = () => (
  <Box
    xs={{
      paddingTop: 20,
      paddingBottom: 80,
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
    }}
    m={{
      padding: 0,
    }}
  >
    <div css={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <img
        alt="twitter.svg"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMFSURBVHgB7ZqBcdswDEXhXgdwN5AnaLqBM0HTCaps4A3iTFBnAqsTuBtIncDOBPIGzga/wJG+6HSxBEqiRPX47nB0LBkkQBCExBBFIpFIJBKJRCJBAmDNsmM5slzwjvx9YEnpf8QankNH2eYIvp6w/BK95MrYXub+ntCNXAyt6FnWHHkkV6wC4YlGgPvZox8lS2r1XGrXEnKFf5RVFPwkj6D7zGvYUhdgkk2VNXkAZo2OYryTDR8ok7B6oIGBPuE5Gw+TC2RZ7Oz4U+2gmmZlQwOB9zwzNGJsWftu6zKwtrCUbWVJPYGZmTHYuQ5sqVBastxRD+Av/Ku4GV8ZXKnsYI8u24zp4wK/bKkrcA/PPRwdAb+kTX1/UozvD7mRspQwYZ0qnfFG/jg3XVyQAjGGmzV1p2B5te15sVicavpLbhLywz33V9y6qHVAwo3U0b0zfoUzmZkXuRtYd5X+DhDsWtrT/FixA863LjbmANgKSj6zkoybZ5oZTcYLbUlQwnIPsxUeyIRrRvPh1HZD4xKAqfIuNF8KjoD7phsaI4B/LDNe0Hz523aDpg5oVRIwRdsNrbuAXQayT/vapnzyxUbxTVojwCqYXfYns/5bK0zNEhAnyJNUQfPit+Yml0JIloBUgwnNg1VbDSCoIkCw4fSNlJ6dmExjvKB2gCBOYEn54yO1PGVNzDiTBLfTm7HIXWz4TI5wB1IZXrPrksLbHp12LKclYHkhkwhFQjM+a3r0/Qj1LnAFYRdGK23yu+IcAXY3+EHh8exqfC84EjYIB6fEN6QTHqB/be6LEh1fxw/lBDk9yjAdvQ5lnJPgLewsrFm+k9kheg1MyaN9VRcWNipK+CWlEIHJC76PulIKDYxTFotj1xQKMKG+wTjPAyd4yPaLJuNqX0nll1j5SibhJTQOL5zsBvuHDBV2do+YlhxThzzMCW+JccknN7wOTJI7wC95cIbXgVkaKYZLfDlMIp3k6bJ3JWhnTKq+hExylLb+ouStInJe92rbk+bVdSQSiUQikYgP/gF6HmxxawvypQAAAABJRU5ErkJggg=="
        css={{ width: 32, height: 32 }}
      />
      <img
        alt="github.svg"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO1SURBVHgB7ZqLcZtAEIZXaSDuILgCKxUEd+AOrA6kDkQqsFIBSgVOKhCuwE4F0IHsCv7czR1jjI5j9wCBEr6ZHUanhdvdez+IZmZm/mcWNDAArtRjaeXGPnVaVFMtrLwqeVLyslgsMrpEtNNK7pQclBwRjn73UcmKLgHr+BbdnG4iV5IqiWhqDOy4i+1kAgFT1c/leJUcYzYNmFJ/wPhoG64okKBRAKb6Hei0Jx+LQsmtGjUKEiIOwASdLykoIAiiAEzY+ZKChEFgB+ACnC8pSBAEVgBsJ/NM03e+pFDyVQXhtU3xE/HYkt/5vZIfSjIanszm9dOjE5GxuTuq9FeMoSiq6Ef2nRz9oecZSX24Q/v8467NP28TAK/dZ6qq3Ta8n6jHmsziR1NU5I3Mwqfki82nXDyVfFeyc1Vn9f29etxTM/qda05TcAIz5WwjbflGWSPYkxW8L6aWLXobhn0JhWAN55DQSIDXPI++4Ps6wYR4BE9Dz4S2b9P0py8A34jHZxqPJVNv3VQLnAGAWWVFxKO1px2QG6aedj52/dFUAyRO/aLxeBLortma4K/vc3RYivYBzLYbhyPLVqUUg8+KRkZob1x/39UEuB1LoSYYexoZu3OcMdVPfHMFICYeGU2H30y9k07TFQDusPaHpsMLU49VAyLqN9NzUDD1TjrBLgG4RKJ6Anc/4J+lSwCmtAYItmUOgCOtIB7c+cI5YM9d6gmuAHB3T7irxXMQM/WKeoIrANzxfYmR1wEVuIXxVk9wBUAyvm9oZOx6hFsQWauGcHHBW2ENCGS7zzHng1eQHXc/0kiAt2lbcpR8+AAZ/RxCCFB5rmUmgr9xA95ua50HOhOQlXzJSpKBrxn4mkeOATdJYPqnA+TkJAXmKKpOWvnfd/yl01NrcHAnCVMQ+htbdDtqS0Mzr5e2/r2q6ERMw54haCJK9x79ni1GFALctUCzregsGQbkEiNggp+jHxIKBf6+YFPRazujE1dBNAdfQo6u1+lgDildfJgEtRgckxDwzyZ9rKgP1Id2DRkkNT3dYe1h2ryWFJWaEpBvF3bUF2huk4NOhRFO3rtdaO7x5UMMP89Q5yMaAk8QdFpMPQM5udT5vi9K6s2UF/t8tTqROr25pgC0RwL1ggJvi4oBfwIEoRP1fAYr+c7AdIy7CQRA2zDengQYV+IokBbH9Qg05uWMd2CahG8iFFEAHsdP7gxOAhuIvaNGBBmLj9Pw6TruAqZppOgwHYWZhqcQ3jOcmZmZmWHyF+48id/ovuphAAAAAElFTkSuQmCC"
        css={{ width: 32, height: 32 }}
      />
      <img
        alt="discord.svg"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQsSURBVHgB7VvhVdwwDNbd6/9eJ6iZoDBB0wl63eA6AWwATNBjgjsmgE6QdAJggoQJoBOo0rPvNfgcW3ZykIR87+kFHFm2FUWWrAvAhAkT3jNmMcyIuKDLiugLkTIEtetro6pdH4juiYrZbFZBl6CFK6Ich4MNkYIuQIJOiZ5weOA5n0EbkIBzHD7OIQWon/xY0GgJs4bFK7rcES1gHHgmOnE5x3lDhwsYz+IZvJaN68aeBZinX8I48Yms4Lne4LKADMaLld3gUsAxjBdf7Ia5hGlEUHbDXMI0Iii74QMcBgXRH9CxORM7nhzkr1dB9BO092bKiL7CAfyTaxdASAMv8opovfO0JGpJl1N4OXG+V5mrDVZQffstiK5J3tbIU3ThoOY7JFoqyfIngJiGNepMcSdjRVSijsc3HIkRHdd5POMviDLT58bIYVrVeJQZMxqh8WMVUPJkrYndmMll0BGMQraoM1JltZcYAclgMchq/Zaon/xBI0gzxqr2fxYzYckAUuS1Pm8aNmPEWYXddw7puN79YYeXb4BLSETqLlDRoo+gR6BpP4EggbN3gVQLuIL+IWlOqRZw1PnBY0sYP/QU4uvCAoq+LZ5h/FABkUhRwDX0F7+hLQQ7iYKeAnUgFrUNuoT40PuTIgxEhjZ/7CtQxDCjjtpyM6kbifWgzhl2fe6wFvUJ0e41QD+WEXLOHf05OTr29FHoLsKICxxG6WILcAnwQZTPo/9dzD39ck8/UbgdGLuVAoJ7bE2G9ym4FoM6DfYhxgoaS3k2b4wPuI/gVYH7C2FbzP06KiljjAIeInirwP3nhjZfUhXzAMRzjVFATMZ3C81K2LqyR9PW5ME5+boFOWKU9RKed1C8Axg5vJ2Vlox79Dgz4wfsPt6do0FOow+yeWNOhaNyfnpivNhvoKsxn4keqG0d6MNjHKHe+/kU+BFqh6wRqCAVzQbQ3xDYBnq2Qpu3zYmQPaCCV0KX44nPA0Ln6aj36Y/Elnw8FYLxH1xn+Bt6naTrEFtASONmQjPjxDo9HTbOkX/qUuqhgotX0GKwJpQoS2YyfFkUWaYoA/8XSNZGVo6CWoN5PUqpD4g9EquIfrCHh/BEMtA7AJexWAEF6AClAndpTBk+vnKFOjPtW9DlsQJkY27AE4l2VRoT/fIKwzmBBMEcALW1/JIIk0xaihI9uTo2p7axYBnKs/AzjCiP2TJcrwA7GgVysClzmLorh1em/Q4SK7gOVEQn5u96uXwJkUmSXc/oQgFDwp4CXNtgBeNFZTe4FPAI48VemuxSQHoq2X/src3lA0QlpoFir6S3ZwGpJaYBYOsq6U0/lnZxG8aDZXVvgMukgi5ZwgUOHxfQBqhDzff5yUxNCRzXb3E4yFF4JhD72ZwCHYfzKe3u0zmAfnw2x8SBzrYHP9qaMGHCQPAPcHN8Q/gLAIsAAAAASUVORK5CYII="
        css={{ width: 32, height: 32 }}
      />
    </div>

    {/* Copyright */}
    <Copyright />
  </Box>
);