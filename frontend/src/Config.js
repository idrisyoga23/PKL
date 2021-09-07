const head = { "Content-Type": "application/json", Accept: "application/json" };

export function headers() {
    const token = localStorage.getItem("token");
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  }