import os from 'os';
import si from 'systeminformation';

const frequency = Number(process.argv[2]);

if (isNaN(frequency) || frequency <= 0) {
    console.error('Please provide a valid positive number as the frequency parameter.');
    process.exit(1);
}

setInterval(async () => {
    const osInfo = {
        operatingSystem: os.type(),
        architecture: os.arch(),
        currentUser: os.userInfo().username,
    };

    const cpuInfo = {
        coresModels: await si.cpu(),
        temperature: (await si.cpuTemperature()).main,
    };

    const graphicsInfo = await si.graphics();

    const memInfo = await si.mem();

    const batteryInfo = await si.battery();

    console.log('Operating System:', osInfo.operatingSystem);
    console.log('Architecture:', osInfo.architecture);
    console.log('Current User:', osInfo.currentUser);
    console.log('CPU Cores Models:', cpuInfo.coresModels);
    console.log('CPU Temperature:', cpuInfo.temperature);
    console.log('Graphics Controllers:', graphicsInfo.controllers);
    console.log('Memory (Total/Used/Free):', `${(memInfo.total / 1024 / 1024 / 1024).toFixed(2)} GB / ${(memInfo.used / 1024 / 1024 / 1024).toFixed(2)} GB / ${(memInfo.free / 1024 / 1024 / 1024).toFixed(2)} GB`);
    console.log('Battery Info:', batteryInfo);

    console.log('\n-------------------\n');
}, frequency * 1000);
