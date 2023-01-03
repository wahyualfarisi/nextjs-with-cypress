import { rest } from 'msw';

export const handlers = [
  rest.post("https://www.backend.com/login", async (req, res, ctx) => {
    const { username, password } = await req.json();

    if(username === 'usertest' && password === 'userpassword'){
      return res(ctx.status(200), ctx.json({ message: 'Authenticated' }));
    }
    
    return res(
      ctx.delay(1000),
      ctx.status(401),
      ctx.json({ message: 'Username / Password salah!' })
    );
  }),

  rest.post("https://www.backend.com/register", async (req, res, ctx) => {
    const { email, username } = await req.json();

    if(email === 'wahyu.alfarisi@amartha.com'){
      return res(ctx.status(400), ctx.json({ message: 'Email sudah digunakan' }));
    }

    if(username === 'usertest'){
      return res(ctx.status(400), ctx.json({ message: 'Username sudah digunakan' }));
    }

    return res(
      ctx.status(200),
      ctx.json({
        message: 'Berhasil mendaftar!'
      })
    );
  }),
]