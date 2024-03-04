import { FloatButton } from 'antd';

export const FButton = () => {
    return (
        <>
            <FloatButton.Group
                trigger="click"
                style={{
                    right: 24,
                }}
                badge={{ dot: true }}
            >
                <FloatButton />
                <FloatButton  />
            </FloatButton.Group>
        </>
    )
}