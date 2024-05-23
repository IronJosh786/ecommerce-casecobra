interface DesignConfiguratorProps {
  configId: string;
  imageUrl: string;
  imageDimensions: {
    height: number;
    width: number;
  };
}

const DesignConfigurator = ({
  configId,
  imageUrl,
  imageDimensions,
}: DesignConfiguratorProps) => {
  return <div>DesignConfigurator</div>;
};

export default DesignConfigurator;
