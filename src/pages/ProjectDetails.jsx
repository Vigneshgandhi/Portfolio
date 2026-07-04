import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Proof1 from "../components/Projects/1/Proof1";

const projects = {
  1: {
    category: "Cybersecurity Project",
    title: "Android Malware Variant Detection Using Static Features",
    description:
      "This project focuses on detecting Android malware and malware variants through static analysis techniques. The system extracts security-related features from Android APK files, including permissions, API calls, intent filters, and AndroidManifest.xml information without executing the application. Machine Learning algorithms are then applied to classify applications as benign or malicious and identify malware variants effectively.",
    technologies: [
      "Python",
      "Machine Learning",
      "Cybersecurity",
      "Android Analysis",
    ],
    journey: [
      {
        title: "How the Project Started",
        description:
          "The increasing number of Android malware attacks and the rapid evolution of malware variants motivated the development of this project. Traditional signature-based detection methods struggle to identify newly emerging malware variants, creating a need for intelligent detection mechanisms.",
      },
      {
        title: "Why the Project is Important",
        description:
          "Millions of Android users install applications from various sources every day. Malicious applications can steal personal information, financial data, and sensitive credentials. This project provides an additional security layer by identifying suspicious applications before installation.",
      },
      {
        title: "What the Project is Used For",
        description:
          "The proposed system can be integrated into mobile security platforms, app stores, enterprise security solutions, and cybersecurity research environments to automatically analyze APK files and detect malware threats efficiently.",
      },
      {
        title: "Key Outcome",
        description:
          "The project demonstrates how machine learning and static feature analysis can improve malware detection accuracy while reducing analysis time compared to traditional dynamic analysis approaches.",
      },
    ],
    screenshots: [
      {
        src: "/projects/1/pws-1.png",
        title: "System Architecture Overview",
        description:
          "The proposed system begins by collecting Android APK malware samples from a dataset for analysis. Static features are then extracted from the APKs, including AndroidManifest information, API calls, permissions, and code obfuscation characteristics, which are converted into feature vectors. The extracted data is preprocessed through cleaning, normalization, feature selection, and dataset splitting to prepare it for training. A machine learning model is trained using the processed data to classify new APKs into malware families such as Adware, Ransomware, Botnet, or Spyware. The system also performs similarity analysis to identify malware variants by comparing feature vectors using cosine similarity. Finally, the results are visualized through performance metrics, confusion matrices, important feature analysis, variant relationships, and detailed reports for evaluation.",
      },
      {
        src: "/projects/1/pws-2.png",
        title: "Confusion Matrix Analysis",
        description:
          "The confusion matrix illustrates the performance of the proposed malware classification model by comparing the actual malware families with the predicted classes. The high values along the diagonal indicate that the model correctly classifies most malware samples, demonstrating strong overall classification accuracy across different malware families. A few off-diagonal values represent misclassifications, mainly between malware families with similar behavioral characteristics, such as Adware, Fake_App, and Ransomware. Classes such as SMS_Stealer, Spyware, Dropper, and Banking_Trojan achieve particularly high prediction accuracy with very few errors. Overall, the confusion matrix confirms that the proposed model effectively distinguishes multiple Android malware families while maintaining low misclassification rates.",
      },
      {
        src: "/projects/1/pws-3.png",
        title: "Important Features",
        description:
          "The figure shows the top 10 most important features identified by the machine learning model for Android malware classification. Among them, api_HttpURLConnection (0.084254) has the highest importance, indicating that network communication behavior is the strongest indicator for distinguishing malware. Other significant features, such as api_Cipher, api_Runtime, api_exec, and api_sendTextMessage, represent encryption, runtime execution, command execution, and SMS-related activities, which are commonly associated with malicious applications. Features like api_TelephonyManager, api_loadLibrary, and api_getDeviceId indicate attempts to access sensitive device information or load native libraries. Finally, short_class_ratio contributes additional structural information about the application. These important features enable the model to accurately detect and classify Android malware by focusing on the most discriminative behavioral characteristics.",
      },
      {
        src: "/projects/1/pws-4.png",
        title: "Static Feature Extraction",
        description:
          "The table presents a sample of the extracted static API-call features from Android applications used for malware analysis. Each row represents an APK sample, while each column indicates the frequency of important API calls such as Runtime.getRuntime(), exec(), DexClassLoader, Cipher, TelephonyManager, sendTextMessage, and Class.forName. These APIs are selected because they are commonly associated with malicious behaviors, including dynamic code loading, command execution, encryption, device information access, and SMS-related activities. The numerical values represent how many times each API is invoked within an application, forming a feature vector for machine learning. These extracted features enable the classifier to differentiate between benign applications and various Android malware families with improved accuracy.",
      },
      {
        src: "/projects/1/pws-5.png",
        title: "Malware Detection Results",
        description:
          "The table presents the final malware detection results generated by the proposed classification system. Each APK is analyzed and categorized as either Benign or Malware based on its extracted static features. For malware samples, the system predicts the corresponding malware family, such as SMS_Stealer or Fake_App. It also identifies the closest known malware variant using similarity analysis and provides a confidence score indicating the reliability of the prediction. Benign applications are not assigned a malware family or variant. This output demonstrates the system's capability to accurately detect, classify, and identify Android malware variants.",
      },
      {
        src: "/projects/1/pws-6.png",
        title: "Malware Detection Confidence",
        description:
          "The figure illustrates the confidence scores of the malware classification model for the detected malicious APKs. Each bar represents the prediction confidence for a malware sample along with its identified malware family and closest variant. The application pbtgbhaiwz.apk is classified as SMS_Stealer with a high confidence score of 88.05%, indicating a reliable prediction. Similarly, genome.apk is identified as Fake_App with a confidence score of 63.10%, suggesting moderate confidence in the classification. Higher confidence values indicate greater certainty in the model's predictions, helping analysts prioritize further investigation and validation of detected malware samples.",
      },
      {
        src: "/projects/1/pws-7.png",
        title: "Jotti Malware Scan Report",
        description:
          "The figure shows the malware analysis report generated by the Jotti Malware Scan service for the application genome.apk. The APK is scanned using multiple antivirus engines, with 5 out of 13 scanners identifying the file as malicious. Different security vendors classify the application under various malware categories, including Adware, Backdoor, Trojan, and Generic Android malware, while others report no threat. The report also provides metadata such as the APK name, file size, hash values (MD5 and SHA-1), scan date, and file type. This multi-engine scanning result validates the presence of malicious behavior and serves as a reliable reference for malware verification and analysis.",
      },
      {
        src: "/projects/1/pws-8.png",
        title: "Jotti Malware Scan Report",
        description:
          "The figure presents the Jotti Malware Scan report for the application pbtgbhaiwz.apk. The APK was analyzed using multiple antivirus engines, with 6 out of 13 scanners detecting it as malicious. Different security vendors classify the application as Android Banker Trojan, Spyware, Trojan, or other malicious variants, while some engines report no threat. The report also includes important file metadata such as the APK name, file size, MD5 hash, SHA-1 hash, and scan timestamp. The multi-engine scan confirms the malicious nature of the application and provides strong evidence for validating the malware classification results.",
      },
    ],
  },
  2: {
    category: "Big Data Analytics Project",
    title: "Stock Market Trend Analysis Using Apache Spark",
    description:
      "Stock Market Trend Analysis Using Apache Spark is a big data analytics project that analyzes historical and real-time stock market data to identify trends, patterns, and price movements. The project uses Apache Spark to process large volumes of financial data quickly and efficiently. By applying data analysis and predictive techniques, it helps investors and financial analysts understand market behavior, forecast future trends, and make informed investment decisions. The system provides fast, scalable, and accurate insights for effective stock market analysis.",
    technologies: ["Apache Spark", "PySpark", "Hadoop", "Hive", "Python"],
    journey: [
      {
        title: "How the project started",
        description:
          "The project started with the growing need to analyze the massive amount of stock market data generated every day. Traditional data processing methods are often too slow to handle large financial datasets efficiently. To overcome this challenge, Apache Spark was chosen for its fast and scalable big data processing capabilities. The project was developed to analyze historical and real-time stock data, identify market trends, and provide data-driven insights that help investors and financial analysts make better investment decisions.",
      },
      {
        title:"Why the Project is Important",
        description:"Stock Market Trend Analysis using Apache Spark is important because it enables the fast processing and analysis of large volumes of stock market data. Apache Spark provides high-speed data processing, helping investors identify market trends and patterns efficiently. The project supports better investment decisions through data-driven insights and predictive analysis. It also improves the accuracy of market forecasting while handling real-time financial data effectively.",
      },
      {
        title:"What the Project is Used For",
        description:"This project is used to analyze historical and real-time stock market data to identify trends, predict price movements, and support investment decisions. By using Apache Spark, it processes large datasets quickly and provides valuable insights into market behavior, helping investors and financial analysts make informed decisions.",
      },
      {
        title: "Key Outcome",
        description:
          "The key outcome of this project is the efficient analysis and prediction of stock market trends using Apache Spark. It enables faster processing of large-scale financial data, improves forecasting accuracy, identifies market patterns, and supports smarter investment strategies through data-driven insights.",
      },
    ],
    screenshots:[
      {
        src: "/projects/2/pws-1.png",
        title: "System Architecture Overview",
        description:
          "The figure illustrates the workflow of the proposed stock market trend analysis system implemented using Apache Spark. Stock market CSV datasets are loaded into a SparkSession, where the cluster manager distributes the data across multiple executors for parallel processing. The executors perform data preprocessing, compute technical indicators such as moving averages (MA7, MA30) and MA150, and generate Buy, Sell, and Hold trading signals. The processed data is combined into a distributed DataFrame and aggregated to obtain stock-wise performance metrics. Finally, Pandas and Matplotlib are used to visualize market trends, and the system generates recommendation reports and output CSV files for further analysis.",
      },
      {
        src: "/projects/2/pws-2.png",
        title: "Flow Diagram",
        description:
          "The figure illustrates the processing pipeline of the proposed stock market trend analysis system. The workflow begins with stock market CSV datasets, which are cleaned and preprocessed in the local file system before being processed by the Apache Spark engine. Spark performs distributed computation to efficiently analyze large volumes of stock market data. The trend calculation layer computes technical indicators such as MA7, MA30, MA150, volatility, and Buy/Sell/Hold signals. The calculated results are aggregated to produce stock-wise trend information. Finally, the processed trends are displayed through a dashboard and visualization interface, enabling users to analyze market performance and make informed investment decisions.",
      },
      {
        src: "/projects/2/pws-3.png",
        title: "Stock Trend Visualization",
        description:
          "The figure displays a bubble chart used to visualize the relationship between the average closing price and 7-day average volatility of different stocks. Each bubble represents an individual stock, while the bubble size indicates the total number of generated Buy, Sell, and Hold trading signals. Stocks with higher average prices and lower volatility can be easily distinguished from more volatile stocks through this visualization. The chart enables quick comparison of stock performance and market behavior across multiple companies. This graphical representation helps investors identify stable, volatile, and actively traded stocks for better investment decision-making.",
      },
      {
        src: "/projects/2/pws-4.png",
        title: "Trading Signal Distribution",
        description:
          "The figure presents a stacked bar chart showing the distribution of Buy, Sell, and Hold signals for the selected stocks. Each bar represents an individual stock, while the colored segments indicate the number of signals generated for each trading action. The visualization enables comparison of trading patterns across different stocks based on historical market data. Variations in the signal counts reflect differences in stock price movements and trend behavior. This analysis helps investors identify stocks with stronger buying or selling opportunities and supports informed investment decision-making.",
      },
      {
        src: "/projects/2/pws-5.png",
        title: "Overall Market Signal Distribution",
        description:
          "The figure presents a pie chart showing the overall distribution of Buy, Sell, and Hold signals generated across all analyzed stocks. The results indicate that Buy signals account for approximately 58.5%, suggesting a predominantly positive market trend during the analysis period. Sell signals represent about 41.2%, while Hold signals constitute only a very small percentage (0.3%). This distribution provides a quick overview of the overall market sentiment and the frequency of trading recommendations. Such visualization helps investors understand market trends and supports strategic investment decision-making.",
      },
      {
        src: "/projects/2/pws-6.png",
        title: "Stock Recommendation Report",
        description:
          "The figure presents the final stock recommendation report generated by the proposed trend analysis system. For each stock, the system displays the latest trading date and price, along with short-term and long-term investment recommendations based on moving average indicators. Short-term recommendations are derived from the MA7 and MA30 crossover, while long-term recommendations use the MA30 and MA150 crossover. The report also includes the average closing price and average volatility of each stock to support risk assessment. This consolidated report enables investors to compare multiple stocks and make informed trading and investment decisions based on market trends and technical analysis.",
      },
    ]
  },
  3: {
    category: "AI and Full Stack Project",
    title:
      "Real-Time Click Fraud Detection in Online Advertising Using Advanced Predictive Models",
    description:
      "This project detects invalid and fraudulent advertisement clicks in online advertising environments. It combines behavioral analysis, feature engineering, predictive modeling, and a full-stack interface to help identify suspicious click activity in real time.",
    technologies: ["React", "Node.js", "MongoDB", "Python", "Deep Learning"],
    journey: [
      {
        title: "How the Project Started",
        description:
          "The Real-Time Click Fraud Detection in Online Advertising Using Advanced Predictive Models project was developed to address fraudulent clicks in Pay-Per-Click (PPC) advertising. Fraudulent clicks generated by bots and malicious users cause significant financial losses and reduce the effectiveness of digital advertising campaigns. Traditional rule-based detection methods struggle to identify new and evolving fraud techniques. This project applies advanced predictive models to detect fraudulent clicks accurately and in real time. The proposed system helps improve advertising security, campaign performance, and advertiser trust.",
      },
      {
        title:"Why the Project is Important",
        description:"Real-time click fraud detection in online advertising is important because it helps identify and prevent fraudulent clicks before they waste advertisers' budgets. By using advanced predictive models and machine learning algorithms, the system can accurately distinguish between genuine and fake user activity. This improves the effectiveness of online advertising campaigns, enhances the reliability of marketing analytics, and protects businesses from financial losses. Additionally, real-time detection increases trust in digital advertising platforms and supports fair, secure, and efficient online advertising.",
      },
      {
        title:"What the Project is Used For",
        description:"This project is used to detect and prevent fraudulent clicks in online advertising in real time. It analyzes user click behavior using advanced predictive models and machine learning algorithms to identify whether a click is genuine or fake. By blocking fraudulent clicks instantly, the system helps advertisers save money, improves the accuracy of advertising performance, protects marketing campaigns from malicious activities, and ensures that advertisements reach real potential customers.",
      },
      {
        title: "Key Outcome",
        description:
          "The key outcome of this project is the accurate real-time detection and prevention of click fraud in online advertising using advanced predictive models. It helps reduce financial losses caused by fraudulent clicks, improves the accuracy of advertising analytics, enhances campaign performance, and ensures that advertisers pay only for genuine user interactions. The system also increases trust, security, and efficiency in digital advertising platforms.",
      },
    ],
    screenshots:[
      {
        src: "/projects/3/pws-1.png",
        title: "System Architecture Overview",
        description:
          "The figure illustrates the overall architecture of the proposed real-time click fraud detection system. The process begins with the Data Collection Layer, followed by Preprocessing and Feature Engineering to clean the data and extract meaningful features. The processed data is used in the Model Training Layer to build a predictive model capable of identifying fraudulent clicks. The trained model is deployed through the Backend API Layer, which communicates with both the Database and the Frontend Output Layer to provide real-time predictions. Finally, the Alert and Action module generates notifications and initiates appropriate actions whenever fraudulent click activity is detected, ensuring secure and reliable online advertising.",
      },
      {
        src: "/projects/3/pws-2.png",
        title: "Design Thinking Methodology",
        description:
          "The figure illustrates the Design Thinking approach adopted for developing the real-time click fraud detection system. The process begins with Empathize, where the challenges faced by advertisers and platform administrators are analyzed. In the Define phase, project requirements and objectives are established based on the identified problems. During Ideate, various machine learning and deep learning techniques are evaluated to select the most suitable fraud detection approach. The Prototype phase involves developing the system architecture, predictive model, API, and user interface. Finally, the Test and Evaluate phase validates the system using performance metrics such as accuracy, precision, recall, and F1-score, while incorporating feedback for continuous improvement.",
      },
      {
        src: "/projects/3/pws-3.png",
        title: "Empathy Map",
        description:
          "The figure presents the Empathy Map developed for the proposed real-time click fraud detection system. It captures the perspectives of key users, including advertisers, marketers, affiliates, and platform administrators, by analyzing what they think and feel, see, say and do, and hear regarding online advertising fraud. The map highlights major pain points such as fake clicks, financial losses, unreliable analytics, and the lack of real-time fraud detection. It also identifies user expectations, including accurate fraud detection, automated alerts, improved campaign performance, and better return on investment (ROI). This analysis helps define user-centric requirements and guides the development of an effective and reliable fraud detection solution.",
      },
      {
        src: "/projects/3/pws-5.png",
        title: "Feature Importance Analysis",
        description:
          "The figure illustrates the feature importance scores generated by the LightGBM model for click fraud detection. The IP address is identified as the most influential feature, followed by click count and click intensity, indicating that user behavior and click frequency play a significant role in detecting fraudulent activity. Time-based features such as hour also contribute to identifying suspicious click patterns. Other features, including app, operating system, channel, and device, provide additional contextual information for classification. This analysis highlights the most discriminative features used by the model, improving both prediction accuracy and the interpretability of the fraud detection system.",
      },
      {
        src: "/projects/3/pws-4.png",
        title: "Product Prediction Interface",
        description:
          "The figure shows the product details page of the proposed Affiliate PPC Fraud Detection System. When a user opens a product, the system performs real-time click analysis and displays the prediction status as Legitimate or Fraudulent. Users can purchase the product directly or share an affiliate link while the system continuously monitors click activity. A live request monitor records events such as product loading and click detection for real-time tracking. This interface integrates product browsing with intelligent fraud detection to ensure secure affiliate marketing and protect advertisers from invalid clicks.",
      },
      {
        src: "/projects/3/pws-6.png",
        title: "Product Prediction Interface",
        description:
          "The figure shows the real-time fraud detection alert displayed by the proposed Affiliate PPC Fraud Detection System. When the predictive model identifies a fraudulent click or suspicious user behavior, the system immediately blocks the transaction and displays a warning message indicating that the customer account has been suspended. This prevents invalid clicks from affecting advertisers and protects the platform from malicious activities. The alert is generated automatically based on the model's prediction without requiring manual intervention. This real-time response enhances platform security, reduces advertising fraud, and ensures the integrity of affiliate marketing campaigns.",
      },
      {
        src: "/projects/3/pws-7.png",
        title: "Promoter Dashboard",
        description:
          "The figure presents the Promoter Dashboard of the proposed Affiliate PPC Fraud Detection System. The dashboard enables promoters to monitor the performance of their listed products by displaying key metrics such as total orders, legitimate clicks, fraudulent clicks, success ratio, and fraud rate. Each product card provides a summary of campaign performance, allowing promoters to compare multiple products easily. A More Details option offers detailed analytics for further investigation of click activity and conversions. This dashboard helps promoters evaluate campaign effectiveness, identify fraudulent traffic, and make informed decisions to improve advertising performance.",
      },
      {
        src: "/projects/3/pws-8.png",
        title: "Product Performance Analytics",
        description:
          "The figure displays the Product Performance Analytics window in the proposed Affiliate PPC Fraud Detection System. It provides a detailed overview of a selected product, including its description and visual performance statistics. The dashboard presents a bar chart showing the total orders, legitimate clicks, and fraudulent clicks, along with a pie chart comparing legitimate and fraudulent traffic. These visualizations enable promoters to quickly assess campaign quality and identify suspicious click activity. The detailed analytics support data-driven decision-making, helping improve campaign performance while minimizing the impact of click fraud.",
      },
      {
        src: "/projects/3/pws-9.png",
        title: "Model Accuracy Comparison",
        description:
          "The figure compares the classification accuracy of the LightGBM, LSTM, and GRU models used for click fraud detection. The results show that LightGBM achieves the highest accuracy of 100%, outperforming both deep learning models. In comparison, LSTM and GRU each achieve an accuracy of approximately 79%, indicating lower classification performance on the given dataset. The superior performance of LightGBM demonstrates its effectiveness in handling tabular clickstream data and identifying fraudulent click patterns. This comparison confirms that LightGBM is the most suitable model for the proposed real-time click fraud detection system.",
      },
    ]
  },
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return (
      <section className="min-h-[80vh] bg-white px-6 py-20 text-[#1A1616]">
        <div className="mx-auto max-w-7xl">
          <BackLink />

          <div className="rounded-3xl border border-[#801426]/10 bg-white p-8 shadow-lg shadow-[#801426]/10 sm:p-10">
            <h1 className="text-4xl font-bold sm:text-5xl">
              Project Not Found
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#403939]">
              The project you are looking for is not available yet.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[80vh] bg-white px-6 py-20 text-[#1A1616]">
      <div className="mx-auto max-w-7xl">
        <BackLink />

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#801426]/10 bg-white p-8 shadow-2xl shadow-[#801426]/10 sm:p-10">
            <span className="font-semibold uppercase tracking-wider text-[#D91A3A]">
              {project.category}
            </span>

            <h1 className="mt-4 mb-6 text-4xl font-bold leading-tight sm:text-5xl">
              {project.title}
            </h1>

            <p className="text-justify text-lg leading-8 text-[#403939]">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[#801426]/10 bg-[#FCDF4C]/50 px-4 py-2 text-sm font-medium text-[#801426]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#801426]/10 bg-[#1A1616] p-8 text-white shadow-2xl shadow-[#801426]/20 sm:p-10">
            <h2 className="mb-8 text-3xl font-bold">Project Journey</h2>

            <div className="space-y-8">
              {project.journey.map((item) => (
                <article
                  key={item.title}
                  className="border-l-2 border-[#FCDF4C]/70 pl-5"
                >
                  <h3 className="mb-3 text-xl font-semibold text-[#FCDF4C]">
                    {item.title}
                  </h3>
                  <p className="text-justify leading-7 text-white/75">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <Proof1 screenshots={project.screenshots} />
      </div>
    </section>
  );
}

function BackLink() {
  return (
    <Link
      to="/projects"
      className="mb-10 inline-flex items-center gap-2 font-semibold text-[#D91A3A] transition hover:text-[#801426]"
    >
      <FaArrowLeft />
      Back to Projects
    </Link>
  );
}




