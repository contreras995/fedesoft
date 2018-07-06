require 'faraday'
require 'oj'

client = Faraday.new(url: 'http://localhost:3000') do |config|
    config.adapter Faraday.default_adapter
    config.token_auth('161ba82778cfc9d9587de903a7213ddf')
end

response = client.post do |req|
    req.url 'api/v1/posts'
    req.headers['content-Type'] = 'application/json'
    req.body = '{"post":{"titulo":"title", "cuerpo": "text" }}'
end

puts Oj.load(response.body)
puts response.status