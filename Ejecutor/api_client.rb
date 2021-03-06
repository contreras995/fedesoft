require 'faraday'
require 'oj'

client = Faraday.new(url: 'http://localhost:3000') do |config|
    config.adapter Faraday.default_adapter
end

response = client.post do |req|
    req.url 'api/v1/usuarios'
    req.headers['content-Type'] = 'application/json'
    req.body = '{"usuario":{"nombre":"test user"}}'
end

puts Oj.load(response.body)
puts response.status