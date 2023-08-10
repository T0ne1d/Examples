$httpClient.get('https://api.my-ip.io/ip', function (error, response, data) {
  $done({
    title: 'Global IP',
    content: data,
    backgroundColor: '#663399',
    icon: 'network',
  })
})