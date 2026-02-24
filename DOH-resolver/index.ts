/* Create a dns resolver that works with DOH */
class DnsResolver {
  private readonly dnsServer: string;
  constructor(dnsServer: string) {
    this.dnsServer = dnsServer;
  }

  public async resolve(domain: string, dnsServer: string = this.dnsServer): Promise<Response> {
    try {
      const res = await fetch('https://' + dnsServer + '/resolve?name=' + encodeURIComponent(domain), {
        headers: {
          'Accept': 'application/dns-json'
        }
      });
      if (!res.ok) {
        const res1 = await fetch('https://' + dnsServer + '/dns-query?name=' + domain, {
          headers: {
            'Accept': 'application/dns-json'
          }
        });
        if (!res1.ok) {
          return new Response("Network response was not ok", { status: res1.status, statusText: res1.statusText });
        }
        return res1;
      }
      return res;
    } catch (error) {
      return new Response(error.message, { status: 500 });
    }
  }
}

const cfResolver = new DnsResolver("cloudflare-dns.com");
cfResolver.resolve("youtube.com").then((response) => {
  if (!response.ok) {
    console.error("Failed to resolve domain:", response.status, response.statusText);
    return;
  }
  console.log("Domain resolved successfully:", response);
})
