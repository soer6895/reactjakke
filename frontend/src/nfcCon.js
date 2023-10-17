import { useLocation } from 'react-router-dom';

function NfcCon() {
    const location = useLocation();
    const phoneNumber = location.state.phoneNumber;
    const countryCode = location.state.countryCode;

    async function readNFC() {
        if ('NDEFReader' in window) {
            // eslint-disable-next-line no-undef
            const ndef = new NDEFReader(); // linje foroven : By adding the // eslint-disable-next-line no-undef comment, you're instructing ESLint to ignore the "not defined" warning for the next line. This is a simple way to address specific linting errors for lines that you know are correct.

            try {
                await ndef.scan();
                console.log("Scan started successfully.");

                ndef.onreadingerror = () => {
                    console.log("Cannot read data from the NFC tag. Try another one?");
                };

                ndef.onreading = event => {
                    console.log("NDEF message read.");
                    const message = event.message;

                    for (const record of message.records) {
                        console.log("Record type:  " + record.recordType);
                        console.log("MIME type:    " + record.mediaType);
                        console.log("Record id:    " + record.id);

                        switch (record.recordType) {
                            case "text":
                                // TODO: Read text record with record data, lang, and encoding.
                                break;
                            case "url":
                                // TODO: Read URL record with record data.
                                break;
                            default:
                            // TODO: Handle other records with record data.
                        }
                    }
                };
            } catch (error) {
                console.log(`Error! Scan failed to start: ${error}.`);
            }
        } else {
            console.log("Web NFC is not supported in this browser.");
        }
    }

    return (

        <div className="flex flex-col items-center p-4 mt-4 bg-white  rounded ">
            <h1 className="mb-4 text-3xl font-bold">NFC Reader</h1>
            <p className="mb-8 text-lg">Scan an NFC tag with your device.</p>
            <button
                className="mb-4 p-4 rounded bg-indigo-500 hover:bg-indigo-900 text-white"
                onClick={readNFC}
            >
                Start NFC Scan
            </button>
            <div className="text-center">
                <p className="mb-2 font-medium">Details from Previous Page:</p>
                <p>Phone Number: {phoneNumber}</p>
                <p>Country Code: {countryCode}</p>
            </div>
        </div>
    );
}

export default NfcCon;
