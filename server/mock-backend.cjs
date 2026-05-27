const http = require('http')

const products = [
  { id: 'regal-retreat-chair', name: 'Regal Retreat Chair', price: 16499, category: 'ottomans' },
  { id: 'astral-dining-table', name: 'Astral White and Gold Dining Table with Chairs', price: 79999, category: 'dining-tables' },
  { id: 'luxurious-living-center-table', name: 'Luxurious Living Center Table', price: 41999, category: 'centre-tables' },
  { id: 'azure-metal-wall-clock', name: 'Azure Metal Wall Clock', price: 3249, category: 'wall-clocks' },
  { id: 'black-round-wall-clock', name: 'Black Round Wall Clock', price: 3249, category: 'wall-clocks' },
  { id: 'aurora-glow-side-table', name: 'Aurora Glow Metal Side Table', price: 8999, category: 'side-tables' },
  { id: 'mobius-coffee-table', name: 'Mobius Coffee Table', price: 28999, category: 'coffee-tables' },
  { id: 'twin-frame-wall-art', name: 'Twin Frame Wall Art Set Of 2', price: 5499, category: 'wall-art' },
]

const categories = [
  'dining-tables',
  'centre-tables',
  'wall-art',
  'wall-clocks',
  'mirrors',
  'side-tables',
  'sideboards',
  'coffee-tables',
  'ottomans',
  'benches',
  'lamps',
  'wall-shelves',
]

let cart = []

const send = (res, status, data) => {
  res.writeHead(status, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'Content-Type': 'application/json',
  })
  res.end(JSON.stringify(data))
}

const readBody = (req) =>
  new Promise((resolve) => {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
    })
    req.on('end', () => {
      resolve(body ? JSON.parse(body) : {})
    })
  })

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost:5000')

  if (req.method === 'OPTIONS') {
    send(res, 204, {})
    return
  }

  if (url.pathname === '/api/health') {
    send(res, 200, { ok: true, service: 'handicrafts-town-mock-api' })
    return
  }

  if (url.pathname === '/api/products' && req.method === 'GET') {
    send(res, 200, products)
    return
  }

  if (url.pathname === '/api/products/featured' && req.method === 'GET') {
    send(res, 200, products.slice(0, 4))
    return
  }

  if (url.pathname.startsWith('/api/products/category/') && req.method === 'GET') {
    const category = url.pathname.split('/').pop()
    send(res, 200, products.filter((product) => product.category === category))
    return
  }

  if (url.pathname === '/api/categories' && req.method === 'GET') {
    send(res, 200, categories)
    return
  }

  if (url.pathname === '/api/cart' && req.method === 'GET') {
    send(res, 200, cart)
    return
  }

  if (url.pathname === '/api/cart/add' && req.method === 'POST') {
    const body = await readBody(req)
    cart.push({ productId: body.productId, quantity: body.quantity || 1 })
    send(res, 201, cart)
    return
  }

  if (url.pathname === '/api/cart' && req.method === 'DELETE') {
    cart = []
    send(res, 200, cart)
    return
  }

  if (url.pathname === '/api/orders' && req.method === 'POST') {
    const body = await readBody(req)
    send(res, 201, {
      id: `order-${Date.now()}`,
      status: 'processing',
      ...body,
    })
    return
  }

  send(res, 404, { message: 'Not found' })
})

server.listen(5000, () => {
  console.log('Mock backend running at http://localhost:5000/api')
})
