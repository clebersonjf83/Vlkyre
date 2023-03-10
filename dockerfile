FROM ubuntu:latest
RUN apt-get update && apt-get install -y \
    jq \
    git \
    curl \
    wget \
    ffmpeg \
    bpm-tools \
    opus-tools \
    python3-pip \
    python-is-python3
RUN curl -s https://deb.nodesource.com/setup_16.x | bash
RUN apt-get update && apt-get install nodejs -y
RUN npm install -g spotify-dl spdl-core forever pm2 yarn corepack && hash -r
RUN git clone https://github.com/magneum/Vlkyre
RUN cd Vlkyre
WORKDIR /Vlkyre
RUN git init --initial-branch=magneum 
RUN git fetch origin magneum 
RUN python -m pip install --upgrade pip
RUN git reset --hard origin/magneum
RUN npm i -g forever && yarn build
RUN yarn install
# EXPOSE 3000
# EXPOSE 5000
# EXPOSE 8000
CMD [ "yarn", "run", "start" ]
