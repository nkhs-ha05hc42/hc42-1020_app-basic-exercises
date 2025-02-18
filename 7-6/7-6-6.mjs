const fetchAddress = async () => {
    try {
        const response = await fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode=0590002");
        const data = await response.json();

        if (data.status === 200 && data.results) {
            return data.results[0]; 
        } else {
            throw new Error("住所情報が取得できませんでした");
        }
    } catch (error) {
        console.error("エラー:", error);
        return null;
    }
};

const viewAddress = (addressData) => {
    if (!addressData) return "住所情報がありません";
    return `${addressData.address1}${addressData.address2}${addressData.address3}`;
};

const run = async () => {
    const addressData = await fetchAddress();
    const formattedAddress = viewAddress(addressData);
    console.log(formattedAddress); 
};

run();