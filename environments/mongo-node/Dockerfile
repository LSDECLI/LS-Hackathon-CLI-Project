FROM debian:buster-slim
RUN apt-get update && \
  apt-get install git -y && \
  apt-get install curl -y && \
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash && \
  export NVM_DIR="$HOME/.nvm" && test -s "$NVM_DIR/nvm.sh" && . "$NVM_DIR/nvm.sh" && \
  nvm install node
  
