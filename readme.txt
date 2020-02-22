Command
=======
1. docker version <<< check docker version installed
2. docker info <<< config values of engine
3. docker command line structure
- old: docker <command> (options)
- new: docker <command> <sub-command> (options)


Installation
============
1.) Download docker for windows from store.docker.com, and install followed by steps. Restart if needed during installation or startup.

// Install Posh-Docker(code autocompletion for docker), actually not necessary, but recommended

2.) Open powershell, enter following command:
Install-Module -Scope CurrentUser posh-docker

3.) After installed, enter following command:
Import-Module posh-docker <<< If you faced problem in this steps, no worries, following these steps:
	- Open powershell as administrator
	- Set-ExecutionPolicy RemoteSigned
Done :), let's try import again.

4.) Posh-docker does not auto start everytime, therefore, enter following command in powershell:
if (-Not (Test-Path $PROFILE)) {
	New-Item $Profile -Type File -Force
}

Add-Content $PROFILE "`nImport-Module posh-docker"

// Download cmder.net, allow multiple cmd/powershell in the same application, like mac os x
5.) Unblock the zip file in the properties and then unzip.

6.) Open it and click settings and go to Startup > Task, under the powershell, right side bottom, delete the "-NoProfile", and save settings. Then, it will now support the auto code completion

Done, enjoy :)

