self.__uv$config = {
    prefix: 'https://arcadehubgaming.github.io/v3/static/tiw/',
    bare:'https://backend.infrared.bomberfish.ca/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://arcadehubgaming.github.io/v3/static/uv/uv.handler.js',
    bundle: 'https://arcadehubgaming.github.io/v3/static/uv/uv.bundle.js',
    config: 'https://arcadehubgaming.github.io/v3/static/uv/uv.config.js',
    sw: 'https://arcadehubgaming.github.io/v3/static/uv/uv.sw.js',
};
