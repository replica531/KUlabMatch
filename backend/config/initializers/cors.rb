Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins [
      'http://localhost:3001',
      'https://ku-lab-match.vercel.app',
      'https://ku-lab-match-git-*-replica531.vercel.app'
    ]
    resource '*',
             methods: %i[get post put patch delete options head],
             headers: :any,
             credentials: true
  end
end
