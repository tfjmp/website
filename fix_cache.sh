echo 'Fixing caching issue.'
sed -i -e "s/home: \[HTML, RSS, JSON, WebAppManifest, headers, redirects\]/home: \[HTML, RSS, JSON\]/g" ./config/_default/config.yaml
hugo mod clean --all
hugo
sed -i -e "s/home: \[HTML, RSS, JSON\]/home: \[HTML, RSS, JSON, WebAppManifest, headers, redirects\]/g" ./config/_default/config.yaml
hugo
