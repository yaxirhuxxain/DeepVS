# DeepVS (Local)
With this version software developers can integrate their custom models with our DeepVS tool. Follow these steps to setup DeepVS (local) tool.

1. Download DeepVS (Local) plugin for Visual Studio Code IDE.

2. Edit your "Host" file the location of the file may varies based on your operating system.
	* Windows -  C:\Windows\System32\drivers\etc\hosts)
	* Linux - /etc/hosts
	* Mac OS X - /private/etc/hosts
add the following line "<Server-IP>		deepvs.com" to your "hosts" file. Do not forget to replace <Server-IP> with the IP address of your cloud/server/local machine’s IP address.
#Example:  127.0.0.1		deepvs.com

3. Setup a simple web server on the IP address you specify in step 2. The machine should be able to accept source code context as a GET request and return suggestions as a JSON object.
#Example: 127.0.0.1/deepvs?code="for(Int IntVar" Here "for(Int IntVar" refers to the context and the response should be a JSON object like this "['=', ':', ';']".


