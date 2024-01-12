export default {
  /* 属性为具体的 method 和 请求 url，值为 object 或 array 作为请求的结果 */
  'GET /api/getInfo': { data: [1, 2, 3, 4] },

  'GET /api/section01': (req, res) => {
    setTimeout(() => {
      const result = {
        data: [
          {
            img: 'https://steamuserimages-a.akamaihd.net/ugc/1826783377640655349/08685BFCEF34400476101FAC4BA665013CFB6D42/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            title: '这是标题1',
            desc: `这是描述随机数${Math.random()}`,
          },
          {
            img: 'https://lh3.googleusercontent.com/proxy/EcO27Y0MzOWJlZwPPzXqhLK8OnBpi0mm10D60kmbXtWT1cKF_0aMxuJTC3pRdwm6WZLqa7hbN5OK4dA6EsiCapNcIERoBHGysrdCId6NgAel_FSMUavAUYz3VpfeBdBsPwWi3nLRfFG2mjpump4YsR64tW6eVYI',
            title: '这是标题2',
            desc: '这是描述',
          },
          {
            img: 'https://picx.zhimg.com/80/v2-b43c93a3e054a58c3d394fbf56f9f6f7_1440w.webp?source=1def8aca',
            title: '这是标题3',
            desc: '这是描述',
          },
          {
            img: 'https://picx.zhimg.com/80/v2-b048f39894ee6ed693f825f4bae2cb4d_1440w.webp?source=1def8aca',
            title: '这是标题4',
            desc: '这是描述',
          },
          {
            img: 'https://pic1.zhimg.com/80/v2-2b15abb8de8706e9b4416a5765fcc2b8_1440w.webp?source=1def8aca',
            title: '这是标题5',
            desc: '这是描述',
          },
          {
            img: 'https://ics-creative.github.io/230510_view_transitions_api/vta-modal/dist/images/photo_00001.webp',
            title: '这是标题6',
            desc: '这是描述',
          },
        ],
      };
      res.end(JSON.stringify(result));
    }, 2000);
  },
};
